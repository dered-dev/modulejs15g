
// celsius to fahrenheit
const celsiusGrade = parseInt(prompt('Grados celsius en tu localidad'))
if( !isNaN(celsiusGrade) ){
	 
	console.log('parte 1')
	console.log('parte 2')
	let fahrenheitGrade  = (celsiusGrade * 9/5) + 32
	console.log(`La temperatura actual es de: ${fahrenheitGrade}ºF`)
	 
} else {
	console.log('Es necesario un número')
}
