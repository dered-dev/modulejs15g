
// .addEventListener('type', callback)
// callback JS
// type: click, change, focus, mouseleave, mouseenter
/**
 * focus, focusin, focusout
 * mouseenter, mouseleave, mousemove
 * click, rightclick
 * 
 * teclado
 * keydown, keypress, keyup
 * focus
 * 
 * load, beforeload
 * 
 */

let buttonEvent = document.getElementById('button__eventListener')

const saludo = () => {
    console.log('saludo event listener ok')
} 

// add event
// buttonEvent.addEventListener('click', saludo )

buttonEvent.addEventListener('click', () => { console.log('saludo event listener') })

// other event
document.getElementById('button__eventListener').addEventListener('focus', () => {
    console.log('saludo event listener focus')
})

// remove event
buttonEvent.removeEventListener('click',saludo)


// ejercicio
// Agregar a 5 koders mas
// pintarlos en el DOM
// 1. utilizar bootstrap
// 2. Que sea responsive
// 3. minimo 3 cards por row

let koders = [
    {
        name: 'Emilio',
        age: 30,
        city: 'Guadalajara',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar: 'https://picsum.photos/200/200'
    },
    {
        name: 'Juan',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://picsum.photos/200/200'
    }
]




