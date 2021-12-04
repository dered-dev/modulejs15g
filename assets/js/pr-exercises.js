

// jorgec@kodemia.mx
// 1. saber hasta donde terminar de reemplazar 6
// --- .indexOf(searchElement)
// 2. por que se va a reemplazar? *
// 3. Reemplazar 

let sep = 'jorgec@kodemia.mx'.split('@')
let maskStr = ''

// sep[0].split('').forEach(() => {
//     maskStr += '*'
// })

for(i = 0; i < sep[0].length ; i++){
    maskStr += '*'
}
// console.log(`${maskStr}@${sep[1]}`)











/** 
 * Dado un arreglo con nombres de personas, 
 * devuele un arreglo con los nombres de las personas que empiezan con vocales (capitalizados)
 * onlyNamesVowels( ['jorge','ana','ivan','sergio','luis','oscar' ] )
 * -> ['Ana','Ivan','Oscar']
*/


/**
 * 
 * Dado una arreglo compuesto por arreglos, 
 * crea una funcion que calcule la suma de los arreglos y posteriormente la suma de las sumas
 * additionMultiArr(  [	[1,2,3] , [1,3,2] , [3,2,1] ] )
 * 
 */

