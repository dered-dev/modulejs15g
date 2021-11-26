

// let saludo = 'hola' 
// for(i = 0; i < saludo.length; i++ ) {
//     console.log(saludo[i])
// }

//  pedir al usuario un string
//  contar las vocales y las consonantes
// imprimir en consola
// 2 vocales y 2 consonantes

const userWord = prompt('Dame una palabra')

if(userWord.length > 0){
    let vowels = 0
    let consonant = 0
    for(i = 0; i < userWord.length; i++ ) {
        let letter = userWord[i].toLowerCase()
        if(letter !== ' '){
            if(
                letter === 'a' ||
                letter === 'e' ||
                letter === 'i' ||
                letter === 'o' ||
                letter === 'u' ||
                letter === 'á' ||
                letter === 'é' ||
                letter === 'í' ||
                letter === 'ó' ||
                letter === 'ú'
            ) {
                // vowels = vowels + 1
                // vowels += 1
                vowels++
            } else {
                consonant++
            }
        }
    }
    console.log(`${vowels} vocales y ${consonant} consonantes`)
} else {
    console.log('Inserta una palabra por favor')
}