

// console.log('funciones')

// funcion sin parametros
function suma() {
	return 2 +  2
}

// funcion con parametros
function toCelsius(fahrenheit) {
	let celsiusGrades = (5 / 9) * (fahrenheit - 32)	

	// retorno de la funcion
	return celsiusGrades
}

// let celsiusGradesReturned = toCelsius(100)
// console.log(celsiusGradesReturned)

/**
 * Funcion que pida el nombre al usuario
 * y lo imprima en consola
 */

function getName() {
	let nameUser = prompt('Dame tu nombre', 'jorge')
	console.log(nameUser)
}
// getName()

/**
 * Funcion que reciba una palabra
 * y la retorne al revés
 */

function stringReverse (stringToReverse){
	// hola
    let stringReversed = ''
    for(let i = stringToReverse.length - 1; i >= 0 ; i--) {
        stringReversed += stringToReverse[i]
    }
    return stringReversed
}


function sumNumbers(a, b = 5) {
	let suma = a + b
	return suma
}

let resultado = sumNumbers(10)



