
// 1. Generar una function
// que reciba un array como parametro
// y devuelva solo los items que son pares
// p.ej. onlyEvenValues( [1, 2, 3, 4] )
// -> [2, 4]
// Aplicar el metodo .forEach()
// hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// 'hola'

const onlyEvenValues = arrNumbers => {
    let arrayToFill = []

    arrNumbers.forEach( numero => {
        if(numero % 2 === 0) {
            arrayToFill.push(numero)
        }
    })

    return arrayToFill
}

let arrayAfiltrar = [1, 2, 3, 4]
let soloPares = onlyEvenValues( arrayAfiltrar )
// console.log(soloPares)


// 2. function que reciba como parametro una array de strings
// y devuelva la primer y ultima letra del string
// de cada uno de los items del array 
// ['hola', 'mundo']
// -> firstAndLast ( ['hola', 'mundo'] )
// -> ['ha', 'mo']
// .forEach() o .map()

const firstAndLast = arrStrings => {
    let arrayToFill = []
    // solution map
    arrayToFill =  arrStrings.map( (palabra) => {
        let primera = palabra.slice(0,1)
        let ultima = palabra.slice(-1)
        return `${primera}${ultima}`
    })

    // for each solution
    // arrStrings.forEach( (item) => {
    //     let newString = `${item.slice(0,1)}${item.slice( item.length - 1)}`
    //     arrayToFill.push(newString)
    // })

    return arrayToFill
}

let arrayToFilter =  ['hola', 'mundo', 'otro', 'cuarto']
let arrResult = firstAndLast(arrayToFilter)
console.log(arrResult)

/**
 * 3. Funcion que reciba un array de numeros
 * y devuelva el promedio
 * -> getAverage( [10, 8, 9, 7] )
 * -> 8.5
 */

const getAverage = (arr) => {
    let total = 0
    let promedio = 0
    let totalItems = arr.length

    arr.forEach( (calificacion) => {
        total = total + calificacion
    })

    promedio = total / totalItems
    return promedio
}


//  4. funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
// convertLeapYear( [1990, 2000, 2001, 2020] )
// -> [2000,2020]
// .forEach()
// hint: https://docs.microsoft.com/es-es/office/troubleshoot/excel/determine-a-leap-year

const convertLeapYear = arr => {
    let arrYearsFiltered = []

    arrYearsFiltered = arr.filter(year => {
        if( (year % 4 === 0 && year % 100 !== 0 ) || (year % 100 === 0 && year % 400 === 0) ){
            return year
        }
    })

    return arrYearsFiltered
}



// ['hOla','munDo']
// -> ['Hola','Mundo']

const capitalizeWithMap = (arr) => {

}

/**
 * Tener una variable tipo Array donde guardar el resultado
 * iterar el array con arr.map()
 * - En cada iteracion 
 * -- Obtener la primer letra del string y ponerla en mayuscula
 * -- Obtener del segundo al último caracter del string y ponerla en minusculas
 * -- formar un solo string con los 2
 * -- retornar ese string
 * 
 * Retornar la variable con el array transformado
 */


let arrayNumbers = [1,2,3,4,5,6]

// const explainMap = (arr) => {
//     let arrayAllenar = []
//     arrayAllenar = arr.map( (numero) => { 
//         return numero + 2
//     })
//     return arrayAllenar
// }

// const explainMap = (arr) => {
//     return arr.map( (numero) => { 
//         return numero + 2
//     })

// }

// const explainMap = (arr) => {
//     return arr.map( (numero) => numero + 2 )
// }

// const explainMap = (arr) => arr.map( (numero) => numero + 2 )
const explainMap = arr => arr.map( numero => numero + 2 )

let invokefunction  = explainMap(arrayNumbers)
console.log(invokefunction)

