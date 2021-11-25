
const numberOne = parseInt(prompt("Dame el valor del primer número"))
const numberTwo = parseInt(prompt("Dame el valor del segundo número"))
const numberThree = parseInt(prompt("Dame el valor del tercer número"))

if ( !isNaN(numberOne) && !isNaN(numberTwo) && !isNaN(numberThree ) ) {

    if (numberOne === numberTwo && numberOne === numberThree) {
        console.log(`Los números son iguales`)
    } else if (numberOne > numberTwo && numberOne > numberThree) {
        console.log(`El número ${numberOne} es el mayor`)
    } else if (numberTwo > numberOne && numberTwo > numberThree) {
        console.log(`El número ${numberTwo} es el mayor`)
    } else {
        console.log(`El número ${numberThree} es el mayor`)
    }

} else {
    console.error("Algunos valores no son numéricos")
}