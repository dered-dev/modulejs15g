
/**
 * arr.forEach()
 * Dado el siguiente array 
 * ['string','value','min','asdfghjk']
 * Hacer una funcion que devuelva el string con mas caracteres
 * 
 */

 const mostLarge  = (arr) => {
    let strLarge =  arr[0]
    arr.forEach( item => {
        if(strLarge.length <= item.length ){
            strLarge = item
        }
    })
    return strLarge
}

let mostLargeStr = mostLarge( ['st','val','min','as'] )
// console.log(mostLargeStr)

/**
 * arr.map()
 * Dado un array 
 * Hacer una funcion que devuelva el mismo array
 * Pero con los items al reves
 * P.ej. reverseStringArr( ['string','value','min'] )
 * Salida: ['gnirts','eulav','nim']
 * 
 */

const reverseStringArr  = (arr) => {
    let reverseString = []
    reverseString = arr.map( (item) => {
        return item.split('').reverse().join('')
    })
    return reverseString
}
// const reverseStringArr = (arr) => {
//     return arr.map( (item) => item.split('').reverse().join('') )
// }

// const reverseStringArr = (arr) => arr.map( (item) => item.split('').reverse().join('') )



/**
 * arr.filter(), .map()
 * Funcion que reciba un array de strings y numeros
 * Filtre solo los strings
 * luego, Capitalice cada string
 * luego, filtre solo los que tengan mas de 5 caracteres
 * y al final, los que tengan al menos 2 letras "a" 
 * 
 * p.ej. filterStrings( ['guadalajara', 3, 'caracas', 'Oslo', 'brasil', 0] )
 * Salida -> ['Guadalajara', 'Caracas']
 */

const filterStrings  = (arr) => {
    return arr.filter(item => typeof item === 'string')
    .map(item => {
        return item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase()
    })
    .filter( item => {
        
        return item.length > 5
    })
    .filter( item => {
        console.log(item)
        return item.split('a').length > 2
    })
}

filterStrings( ['guadalajara', 3, 'caracas', 'Oslo', 'brasil', 0] ) 


