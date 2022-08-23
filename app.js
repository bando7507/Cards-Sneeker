

const toggleNav = document.getElementById('nav__toggle'),
    nav = document.getElementById('nav__menu')

toggleNav.addEventListener('click', () => {
    nav.classList.toggle('show')
})


const sizes = document.querySelectorAll('.size__tallas')
const Colors = document.querySelectorAll('.sneaker__color')
const imgs = document.querySelectorAll('.sneaker__img')

function changeSize(){
    sizes.forEach(siz =>{
        siz.classList.remove('active-tallas')
    })
    this.classList.add('active-tallas')    
}

function changeColor(){
 let primary = this.getAttribute('primary')
 let color = this.getAttribute('color')
 let sneakerColor= document.querySelector(`.sneaker__img[color="${color}"]`)
     console.log(sneakerColor)
    Colors.forEach(el =>{
        el.classList.remove('active')
    })
    this.classList.add('active')
    document.documentElement.style.setProperty('--primary',primary )

    imgs.forEach(img =>{
        img.classList.remove('showss')
    })
    sneakerColor.classList.add('showss')
}

sizes.forEach(siz => siz.addEventListener("click", changeSize))
Colors.forEach(colors => colors.addEventListener("click", changeColor))

