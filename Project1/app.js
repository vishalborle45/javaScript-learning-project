
const Apikey = "33fe4d243fba235b29d918259548f348"
const URLd = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(input_city) {
    try {
        const response = await fetch(URLd + `&appid=${Apikey}&q=${input_city}`)
        let data = await response.json();
        console.log(data)

        if (response.status == 200) {
            const temp = document.querySelector('.temp')
            temp.innerHTML = `${Math.floor(data.main.temp)}°C`
            const cityname = document.querySelector('.city')
            cityname.innerHTML = data.name

            const humidity = document.querySelector('.humidity')
            humidity.innerHTML = `${data.main.humidity}%`
            const wind = document.querySelector('.wind')
            wind.innerHTML = `${Math.floor(data.wind.speed)}km/hr`

            const condition = data.weather[0].main
            console.log(condition)

            document.querySelector('.weather_icon').outerHTML = `<img src="images/${condition.toLowerCase()}.png" alt="" class="weather_icon">`

            document.querySelector('.weather').style.display = 'block'
        }
        else {
            const errora = document.querySelector('.error')
            errora.innerHTML = innerHTML = 'City not found! try again'
            errora.style.display = 'block'
            document.querySelector('.weather').style.display = 'none'
        }



    } catch (error) {
        console.log(error)
        const errora = document.querySelector('.error')
        errora.innerHTML = innerHTML = 'Error Fetching Data'
        errora.style.display = 'block'
        document.querySelector('.weather').style.display = 'none'

    }

}



// checkWeather()
const input_city = document.querySelector('#inputvalue')
const searchBTN = document.querySelector('.btn')
searchBTN.addEventListener('click', () => {
    checkWeather(input_city.value)

})

