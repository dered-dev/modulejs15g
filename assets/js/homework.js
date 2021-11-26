// pedir al usuario una palabra (permitir espacios, mayusculas)
// Verificar que sea un palindromo
// mandar en consola el resultado
// -> La palabra "anita lava la tina" es un palindromo



// For solution
// const wordUser = prompt('Dame una palabra ').trim().toLowerCase()

// let wordWithoutSpace = ''
// let wordReversed = ''

// if(wordUser != ''){
//     for(i = 0; i < wordUser.length; i++){
//         if(wordUser[i] !== ' '){
//             wordWithoutSpace = wordWithoutSpace +  wordUser[i]
//         }
//     }

//     for(j = wordWithoutSpace.length - 1; j >= 0 ; j--){
//         wordReversed = wordReversed + wordWithoutSpace[j]
//     } 

//     wordWithoutSpace === wordReversed ?
//         console.log(`La palabra "${wordUser}" es un palindromo`)
//     :
//         console.log(`La palabra "${wordUser}" No es un palindromo`)

// } else {
//     console.log('Inserta una palabra valida')
// }


// Homework
// De la solucion anterior generar lo siguiente
// 1. While solution
// 2. Permitir acentos
// 


const wordUser = prompt('Dame una palabra ').trim().toLowerCase()
let wordWithoutSpace = wordUser.replace(/\s/g, '');
let wordReversed = ''

if(wordUser != ''){
    let wordNoCharaters =  ''
    let counter = 0
    while(counter < wordWithoutSpace.length){
        switch(wordWithoutSpace[counter]) {
            case 'á':
                 wordNoCharaters += 'a'
                break
            case 'é':
                 wordNoCharaters += 'e'
                break
            case 'í':
                 wordNoCharaters += 'i'
                break
            case 'ó':
                 wordNoCharaters += 'o'
                break
            case 'ú':
                 wordNoCharaters += 'u'
                break
            default:
                wordNoCharaters += wordWithoutSpace[counter]
                break
        }
        counter++
    }
    console.log(wordNoCharaters)
            
    let counterReverse = wordNoCharaters.length - 1
    while(counterReverse >= 0){
        wordReversed += wordNoCharaters[counterReverse]
        counterReverse--
    }
    console.log(wordReversed)

    wordNoCharaters === wordReversed 
    ? console.log(`La palabra "${wordUser}" es un palindromo`)
    : console.log(`La palabra "${wordUser}" No es un palindromo`)

} else {
    console.log('Inserta una palabra valida')
}



// Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100
// -> 233168

let counterMulti = 0
for(i = 1; i <= 100; i++){
    i % 3 === 0 || i % 5 === 0 ? counterMulti += i : ''
}
console.log(counterMulti)