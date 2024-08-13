const searchForm  = document.querySelector('#Search_form')
const searchBox  = document.querySelector('#SearchBOX')
const searchResult  = document.querySelector('.search-result')
const showMore  = document.querySelector('#show-more-btn')

const Accesskey = 'tuckeIiOBubyxxcjtwpME-EjdXbgBrIaEma6oapGKOQ'
// tuckeIiOBubyxxcjtwpME-EjdXbgBrIaEma6oapGKOQ

let keyword = ""
let page = 1;

async function searchImage() {
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${Accesskey}&per_page=12`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    if(page ===1){
        searchResult.innerHTML = "";
    }
    const result = data.results
    result.map((result)=>{
        const img = document.createElement('img')
        img.src=result.urls.small
        const anchor = document.createElement('a')
        anchor.href=result.links.html
        anchor.target ="_blank"
        anchor.appendChild(img)
        searchResult.appendChild(anchor)
    })

    showMore.style.display = 'block'

}

showMore.addEventListener('click',()=>{
    page++
    searchImage()
})

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    page = 1
    searchImage()
})