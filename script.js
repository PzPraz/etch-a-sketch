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

let btn = document.querySelector('.button')

btn.addEventListener('click', clear)

function clear(){
    for(let i = 0; i < container.childElementCount; i++){
        size[i].classList.remove('blackBackground')
    }
}

function calculateSize(a){
    if(a > 100){alert('invalid');}
    container.style.gridTemplateColumns = `repeat(${a}, 1fr)`
    container.style.gridTemplateRows = `repeat(${a}, 1fr)`
}
;
let getSize = document.querySelector('.getSize')

getSize.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        calculateSize(getSize.value)
        clear()
    }
})

let eraser = document.querySelector('.eraser')

eraser.addEventListener('click', erase)

function erase(){
    size.forEach(div => div.addEventListener("mouseover", function getStyle(e){
        this.classList.remove('blackBackground')
    }))
}

//click mode coming soon

let clickMode = document.querySelector('.clickMode')

clickMode.addEventListener('click', click)

function click(){
    size.forEach(div => div.addEventListener("click", function(){
        this.classList.add('blackBackground')
    }))
}

let blackMode = document.querySelector('.blackMode')

blackMode.addEventListener('click', black)

function black(){
    size.forEach(div => div.addEventListener("mouseover", function(){
        this.classList.add('blackBackground')
    }))
}