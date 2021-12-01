// Función 1:
// valor por defecto 10
// Imprimir en consola las tablas de multiplicar del 1 al 10

const printMultiTables = (tableLimit = 10) => {
  for (i = 1; i <= tableLimit; i++) {
    for (j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`)
    }
  }
}

// Función 2:
// valor por defecto 10
// Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100

const addNumbersRange = (numberEnd = 10) => {
  let addRange = 0
  if (!isNaN(parseInt(numberEnd)) || (numberEnd >= 1 && numberEnd <= 100)) {
    for (i = 1; i <= numberEnd; i++) {
      addRange += i
    }
  } else {
    console.log("No es un número valido")
  }
  return addRange
}

// Función 3:
// valor por defecto "1234"
// Imprimir en consola la suma total de todos los digitos de una cantidad
// p.ej. "1234" -> 10

const additionNumbers = (numberValue = 1234) => {
  let numberToAdd = numberValue.toString()
  let addNumber = 0

  for (i = 0; i < numberToAdd.length; i++) {
    addNumber = addNumber + parseInt(numberToAdd[i])
  }

  return addNumber
}

// Función 4:
// valor por defecto 3 y 5, sino el que ponga el usuario
// Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
// -> 233168

const getMulti = (numberMulti = "default") => {
  let addMulti = 0
  if (numberMulti === "default") {
    for (i = 0; i <= 100; i++) {
      i % 3 === 0 || i % 5 === 0 ? (addMulti += i) : ""
    }
  } else {
    for (i = 0; i <= 100; i++) {
      i % numberMulti === 0 ? (addMulti += i) : ""
    }
  }

  return addMulti
}

/**
 * Funcion que pida el nombre al usuario
 * y lo imprima en consola
 */

function getName() {
  let nameUser = prompt("Dame tu nombre", "jorge")
  console.log(nameUser)
}
// getName()

/**
 * Funcion que reciba una palabra
 * y la retorne al revés
 */

function stringReverse(stringToReverse) {
  // hola
  let stringReversed = ""
  for (let i = stringToReverse.length - 1; i >= 0; i--) {
    stringReversed += stringToReverse[i]
  }
  return stringReversed
}

// Funcion que permita convertir grados fahrenheit a celsius

function toCelsius(fahrenheit) {
  let celsiusGrades = (5 / 9) * (fahrenheit - 32)

  // retorno de la funcion
  return celsiusGrades
}
