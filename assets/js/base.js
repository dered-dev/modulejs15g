
/**
 * Selecionar elementos
 * 
 * 1. Selecionar por ID
 */

//  1. Selecionar por ID
document.getElementById('head__title') 
document.getElementsByTagName('li')
document.getElementsByClassName('link__menu')

document.querySelector('#head__title')
document.querySelector('li')
document.querySelector('.link__menu')
document.querySelectorAll('.link__menu')
// document.querySelectorAll('')

/**
 * Obtener atributos
 * Setear atributos
 */

// get
let title = document.querySelector('#head__title').getAttribute('data-title')
let level = document.querySelector('#head__title').getAttribute('data-level')

// set
document.querySelector('#head__title').setAttribute('data-custom','random')
// reemplazando clases 
document.querySelector('#head__title').setAttribute('class','trees cuatro')

// Agregar clases
document.querySelector('#head__title').classList.add('clase3')
// remover clases
document.querySelector('#head__title').classList.remove('clase2')

// comprobar si existe un atributo
document.querySelector('#head__title').hasAttribute('class')


// comprobar si el titulo tiene class
/**
 * Si si, comprobar 
 * ---si tiene la clase "clase1 clase2"
 * ----- Agregar la "clase 3"
 * ---sino 
 * ----- Agregar la clase "custom"
 */







// data attributes
// propiedades personalizadas



/**
 * Seleccionar padres e hijos (traversing)
 */


/**
 * Manipular elementos del DOM
 */