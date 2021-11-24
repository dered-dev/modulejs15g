/*
	Ejercicio 1:
	Pedir 2 variables por prompt
	Si a > b dividir a entre b
	Si a < b sumar a más b
	si a == b multiplicar ambos numeros
	Imprimir el resultado en consola
*/

const a = parseInt(prompt('dame el valor de A'))
const b = parseInt(prompt('dame el valor de B'))

if(isNaN(a) === false && isNaN(b) === false ){
    if(a > b ) {
        console.log(a / b)
    } else if(a < b){
        console.log(a + b)
    } else if(a === b) {
        console.log(a * b)
    }
} else {
    console.error('Algunos de los numeros no son tipo number')
}


//    console.log('tabla del ' + (i+ 3) + '.') 
//    console.log(`tabla del ${i+3}`)
// for(i = 1; i <= 10; i++ ){

//    for(j = 1; j <= 10 ; j++) {
//     console.log(`${i} x ${j} = ${ i * j }`)
//    } 

// }













