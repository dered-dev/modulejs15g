
// Metodos de objetos

// console.log(this)
// console.log(this.alert)

let koder = {
    name:"jorge",
    lastName:"Camarillo",
    average: [10, 10, 10, 8, 9],
    // totalAverage: 10,
    // totalAverage: 9.4, 
    // getFullName: function () {
    //     console.log(this)
    //     return `${ this.name } ${ this.lastName } ${this.age}`
    // }
    setAge: function (age = 10) {
        this.age = age
    }
}
// console.log(koder)

// koder.setAge()

// console.log(koder)



koder.getFullName = function () {
    console.log(this)
    return `${ this.name } ${ this.lastName }`
}


/**
 * Ejercicio
 * Asignar un nuevo metodo al objeto koder
 * que devuelva el promedio general
 * @returns Number
 * 
 * p.ej. console.log(koder.getAverage())
 * -> 9.4
 * 
 */

koder.getAverage = function () {
    let sum =  this.average.reduce((acc, cv) => acc += cv, 0)
    let total =  this.average.length
    let av = sum / total
    return av
}

koder.setAverage = function () {
    this.totalAverage = this.getAverage()
}

// Agregar un metodo para calcular el IMC
koder.setGetIMC = function () {
    
}

// Agregar un metodo para Agregar un nuevo promedio
koder.setNewAve = function () {
    
}


// Agregar un metodo para agregar una nueva propiedad 
koder.addNewProperty = function () {
    
}

koder.newProp = ''
koder['newProp'] = ''






