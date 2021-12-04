




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
const getInitialLetters = (arr) => arr.reduce( ( acc, cv) => `${acc}${cv.slice(0,1)}`, '' )

// const getInitialLetters = (arr) => {
//     return arr.reduce( ( acc, cv) => `${acc}${cv.slice(0,1)}`, '')
// }


let initial = getInitialLetters(fullname)
// console.log(initial)

// [].reduce( (acc,value, index, array) => {}) -> []

let arrRedNumbers = [11,10,9]
// -> [22,20,18]

let resArrReduced = []
resArrReduced = arrRedNumbers.reduce( (acc, cv) => {
    acc.push(cv * 2)
    return acc
}, [10,20] )

console.log(resArrReduced)







