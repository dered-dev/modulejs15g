
// celsius to fahrenheit
const celsiusGrade = parseInt(prompt('Grados celsius en tu localidad'))

if(!isNaN(celsiusGrade)){
	let fahrenheitGrade  = (celsiusGrade * 9/5) + 32
	console.log(`La temperatura actual es de: ${fahrenheitGrade}ºF`)
} else {
	console.log('Es necesario un número')
}