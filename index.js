const inputSelection = document.querySelector("#mission")
const remove = document.querySelector("#remove")
const list = document.querySelector(".list")
const darkMode = document.querySelector("#mode")
const itensNumber = document.querySelector('#itens-number')
const listLength = document.getElementsByClassName('flex-container')


const body = document.querySelector('body')
const pLight = document.getElementsByClassName('p-light')
const todo = document.querySelector('.todo')
const action = document.querySelector('.action')




function turnDark(){

  body.classList.add('dark-mode-body')
  inputSelection.classList.add('dark-mode-mission')
  todo.classList.add('dark-mode-todo')
  action.classList.add('dark-mode-action')

  if(pLight.length > 0){
    for(let i = 0; i < pLight.length; i++){
      pLight[i].classList.add('p-dark')
    }
  }
}

function turnLight(){
  body.classList.remove('dark-mode-body')
  inputSelection.classList.remove('dark-mode-mission')
  todo.classList.remove('dark-mode-todo')
  action.classList.remove('dark-mode-action')


  if(pLight.length > 0){
    for(let i = 0; i < pLight.length; i++){
      pLight[i].classList.remove('p-dark')
    }
  }
  
}

function deleteItem(e){
  e.remove()

  listLength.length = 0 ? itensNumber.innerHTML = '0 itens left' : itensNumber.innerHTML = `${listLength.length} itens left`
}

function markCheck(e){
  if(e.classList.contains('noChecked')){
      e.classList.remove("noChecked")
      e.classList.add("checked")
    }else{
      e.classList.add("noChecked")
      e.classList.remove("checked")
    }
}


darkMode.addEventListener("click", function(){

  let src = darkMode.getAttribute('src')
  let newsrc = (src === 'images/icon-moon.svg') ? 'images/icon-sun.svg' : 'images/icon-moon.svg'
  
  darkMode.src = newsrc

  newsrc === 'images/icon-sun.svg' ? turnDark() : turnLight()

})


inputSelection.addEventListener("keypress", function(event){
  if (event.key === "Enter" && inputSelection.value != ''){
    
    const flexContainer = document.createElement('div')

    flexContainer.classList.add("flex-container")

    list.appendChild(flexContainer)

    const left = document.createElement('div')
    left.classList.add("left")

    flexContainer.appendChild(left)

    const checkImg = document.createElement('img')
    checkImg.classList.add("noChecked")
    checkImg.onclick = () => markCheck(checkImg)
    checkImg.setAttribute('id','check')
    checkImg.setAttribute('src',"images/icon-check.svg")


    left.appendChild(checkImg)

    const paragraphLeft = document.createElement('p')
    paragraphLeft.classList.add('p-light')
    paragraphLeft.innerText = inputSelection.value

    left.appendChild(paragraphLeft)

    const right = document.createElement('div')
    right.classList.add("right")
    flexContainer.appendChild(right)

    const removeImg = document.createElement('img')
    removeImg.classList.add("cross")
    removeImg.setAttribute('id', 'remove')
    removeImg.onclick = () => deleteItem(flexContainer)
    removeImg.setAttribute('src', "images/icon-cross.svg")

    right.appendChild(removeImg)

    for(let i = 0; i < listLength.length; i++){
      itensNumber.innerHTML = `${[i+1]} itens left`
    }

    inputSelection.value = ''
  }
})







