// Propiedades
// key: valor
let carObject = {
    modelo: 'jetta',
    marca: 'VW',
    color: 'rojo',
    year: 2020,
    tenencias: [2019, 2020, 2021]
}


// Objeto Koder
let koder = {
    name: 'jorge luis',
    lastName: 'Camarillo',
    age: 30,
    generation: 6,
    modulos: ['js','node js', 'cloud'],
}


// Create
// koder['isMentorCorchete'] = false
// koder.modulos = ['js','node js', 'cloud']
koder.ismentor = true

// Read
// console.log(koder.isMentor)
// console.log(koder.name.toUpperCase())

// Update
koder.name = 'juan'
koder.modulos.push('otro item')

// Delete
// delete object.propiedad
delete koder.age




// [].forEach((value, index, array) => {})
// [].filter((value, index, array) => {})
// [].map((value, index, array) => {})
// [].reduce((acc, value, index, array) => {})

let cities = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain"
}
  
for (let city in cities) {
    console.log(city)
}

// for in
for(let propiedad in koder) {
    // console.log( propiedad , koder[propiedad] )
}

// 1. name : jorge luis
// 2. lastName : Camarillo
// ...
let counter = 1
for(let propiedad in koder) {
    console.log(`${counter}. ${propiedad} : ${koder[propiedad]}`)
}