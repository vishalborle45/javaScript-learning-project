let lists = document.querySelectorAll('.block')
console.log(lists)

let rightBox = document.querySelector('.right')
let leftBox = document.querySelector('.left')
let selected = null

lists.forEach((item) => {
    item.addEventListener('dragstart', function (e) {
        if(e.target.tagName ==="DIV"){
            selected = e.target
        }
    })
})


rightBox.addEventListener('dragover', function (e) {
    e.preventDefault()

})

rightBox.addEventListener('drop', () => {
    rightBox.appendChild(selected)
    selected = null
})

leftBox.addEventListener('dragover', function (e) {
    e.preventDefault()

})

leftBox.addEventListener('drop', () => {
    leftBox.appendChild(selected)
    selected = null
})
