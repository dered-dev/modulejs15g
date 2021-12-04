




// [].forEach((value, index, array) => {})
// [].map((value, index, array) => {}) -> []
// [].filter((value, index, array) => {}) -> []

// [].reduce( (acc,value, index, array) => {}) -> {}
// [].reduce( (acc,value, index, array) => {}) -> 0
const numbers = [5, 10, 15]

let resultadoDelReduce = 0
let prevValue = 100
resultadoDelReduce = numbers.reduce( (acc, cv, index, arr) => {
    // console.log('Acumulador es ' + acc, ' CurrentValue es '+ cv)
    return acc + cv
}, prevValue)

// console.log(resultadoDelReduce)


// [].reduce( (acc,value, index, array) => {}) -> ''

const fullname = ['jorge','luis', 'camarillo', 'cristobal']

// ->'jorge luis camarillo cristobal'
const getFullName = (arr) => {
    return arr.reduce( ( acc, cv) => `${acc} ${cv}` )
}

// ->'jlcc'
const getInitialLetters = (arr) => {
    let initials = ''
    initials = arr.reduce( ( acc, cv) => `${acc}${cv.slice(0,1)}`, '')
    return initials
}


let initial = getInitialLetters(fullname)
console.log(initial)

// [].reduce( (acc,value, index, array) => {}) -> []





