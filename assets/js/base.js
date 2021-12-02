
// arr.forEach()

// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el  valor mas alto
// input: [1,4,3,2,5]
// output: -> [5]

const mostBigger = (arr) => {
	let biggest = arr[0]
	arr.forEach( (value, index, array) => {
		if(biggest < value){
			biggest = value
		}
	})
	return biggest
}



const smallerNumber = (arr) => {
	let smaller = arr[0]
	arr.forEach( (value) => {
		if(smaller > value){
			smaller = value
		}
	})
	return smaller
}
console.log( smallerNumber( [5,7, 3, 4, 10] ) )
