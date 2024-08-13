const input_box = document.getElementById('input-box')
const listcontainer = document.getElementById('notes')
const add_Btn = document.querySelector('.Btn')
const delete_tak = document.querySelector('ul li span')


add_Btn.addEventListener('click', () => {

    if (input_box.value === '') {
        alert("You must write something!")
    }
    else {
        const newNode = document.createElement('li')
        newNode.innerHTML = input_box.value
        listcontainer.appendChild(newNode)
        const span = document.createElement('span')
        span.innerHTML = '\u00d7'
        newNode.appendChild(span)
        
    }
    input_box.value = '';
    saveData();



})

listcontainer.addEventListener('click', function (e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
    saveData();

    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    saveData();

    }
})

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML)
}

function showlist (){
    listcontainer.innerHTML = localStorage.getItem('data')
}

showlist()

// wellfound linkdeen and internshala