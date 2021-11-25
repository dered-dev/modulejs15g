/**
 *
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

// const numberUser = parseInt(prompt("Dame un numero entre 1 y 100"));
// if (!isNaN(numberUser) && numberUser > 0 && numberUser <= 100) {
//     if (numberUser % 2 === 0) {
//         console.log(`${numberUser} es par`);
//     } else {
//         console.log(`${numberUser} es impar`);
//     }
// } else {
//     console.error("valor no aceptado");
// }

const numberUserCond = parseInt(prompt("Dame un numero entre 1 y 100"))
if (!isNaN(numberUserCond) && numberUserCond > 0 && numberUserCond <= 100) {
    numberUserCond % 2 === 0 ?  
    console.log(`${numberUserCond} es par`) : 
    console.log(`${numberUserCond} es impar`)
} else {
    console.error("valor no aceptado")
}


/**
 *
 * Pedir al usuario el dia de la semana
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

const dayWeek = prompt("¿Qué día de la semana es hoy?")

switch (dayWeek) {
    case "Lunes":
    case "LUNES":
    case "lunes":
        console.log(`${day} es el dia 1`)
        break

    case "Martes":
    case "MARTES":
    case "martes":
        console.log(`${day} es el dia 2`)
        break

    case "miercoles":
    case "miércoles":
        console.log(`${day} es el dia 3`)
        break
    case "Jueves":
    case "JUEVES":
    case "jueves":
        console.log(`${day} es el dia 4`)
        break
    case "Viernes":
    case "VIERNES":
    case "viernes":
        console.log(`${day} es el dia 5`)
        break
    case "Sabado":
    case "Sábado":
    case "SABADO":
    case "SÁBADO":
    case "sabado":
    case "sábado":
        console.log(`${day} es el dia 6`)
        break
    case "Domingo":
    case "DOMINGO":
    case "domingo":
        console.log(`${day} es el dia 7`)
        break
    default:
        console.error(`Es un día invalido`)
        break
}

/**
 *
 * Pedir al usuario 2 numeros
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */

const numberOne = parseInt(prompt("Dame el valor del primer número"))
const numberTwo = parseInt(prompt("Dame el valor del segundo número"))

if ( !isNaN(numberOne) && !isNaN(numberTwo) ) {
    if (numberOne === numberTwo) {
        console.log(`Los números son iguales`)
    } else if (numberOne > numberTwo) {
        console.log(`El número ${numberOne} es el mayor`)
        console.log(`El número ${numberTwo} es el menor`)
    } else {
        console.log(`El número ${numberTwo} es el mayor`)
        console.log(`El número ${numberOne} es el menor`)
    }
} else {
    console.error("Algunos valores no son numéricos")
}