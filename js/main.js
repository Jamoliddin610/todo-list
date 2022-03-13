const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
let strBtn = document.getElementById('btn');
let strBox = document.getElementById('box');
let nameItems = document.querySelector('#personName');
let dBlocks = document.querySelector('.d-block')


strBtn.addEventListener('mousedown',function(){
    strBox.classList.add('d-none');
    dBlocks.classList.add('d-none')
})
itemInput.addEventListener("keyup",()=>{
    let newItem = itemInput.value;
    nameItems.innerHTML = newItem + "'s";
    
})


const addInput = document.getElementById('todo-input');
const addfrom = document.getElementById('todo-form');
const addList = document.querySelector('.todo__list');
addfrom.addEventListener('submit',addItem);

function addItem(e) {
    e.preventDefault()
    let newAddItem = addInput.value;
    let li = document.createElement("li")
    let deleteBtn = document.createElement("button")
    let icon = document.createElement("i");
    li.className = "todo__items";
    deleteBtn.className = "todo__btn"
    icon.className = "bx bx-x"
    li.appendChild(document.createTextNode(newAddItem))
    li.appendChild(deleteBtn)
    deleteBtn.appendChild(icon)
    console.log(li);
    addList.appendChild(li)

    addInput.value="";


    deleteBtn.addEventListener('click',function () {
        li.remove()
        
    })
    li.addEventListener('click',function(){
        icon.className = "bx bx-check"
    })
}


