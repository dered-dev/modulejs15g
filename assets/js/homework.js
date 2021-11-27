let palabra = prompt('Dame una palabra').toLowerCase().trim()
let wordCap = `${palabra[0].toUpperCase()}${palabra.substring(1)}`
console.log(wordCap)
// let wordCap = palabra[0].toUpperCase() + palabra.substring(1)
