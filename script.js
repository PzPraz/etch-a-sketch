let container = document.querySelector('.container')

for(let i = 0; i < 256; i++){
    let divs = document.createElement('div')
    divs.classList.add('size')
    container.appendChild(divs)
}

let size = document.querySelectorAll('.size')

function getStyle(e){
    this.classList.add('blackBackground')
}

size.forEach(div => div.addEventListener("mouseover", getStyle))

function clear(){
    size.forEach(div => div.classList.remove('blackBackground'))
}