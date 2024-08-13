const Api_url =  'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
const input_data = document.querySelector('.container  input')
const imgBOX = document.querySelector('.imgBOX')
const Qr_image = document.querySelector('#QR-Image')


document.querySelector('.gen').addEventListener('click', ()=>{
    if(input_data.value.length > 0){
        Qr_image.src =`${Api_url}${input_data.value}`
        imgBOX.classList.add('show-img')  
    }else{
        input_data.classList.add('error')
        setTimeout(()=>{
        input_data.classList.remove('error')

        },2000)
    }
    

    setTimeout(()=>{
        imgBOX.classList.remove('show-img')  
    }, 10000)
    

})

// const downloadBtn = document.querySelector('.download')
// downloadBtn.addEventListener('click', () => {
//     const link = document.createElement('a');
//     link.href = Qr_image.src;
//     link.download = 'qrcode.png'; // Filename for the downloaded image
//     link.click();
// });