let koder = {
    name:"jorge",
    lastName:"Camarillo",
    average: [10, 10, 10, 8, 9],
    age: 30,

    getAge: function () {
        return this.age
    },

    get ageKoder() {
        return this.age
    },

    set ageKoder(age) {
        this.age = age
    },

    get fullName() {
        return `${ this.name } ${ this.lastName }`
    },

    set fullName(objFullName) {
        this.name = objFullName[0]
        this.lastName = objFullName[1]
    },
}

// Metodos
// console.log( koder.getAge() )

// getters
// console.log('Edad inicial: ', koder.ageKoder)
// console.log('Nombre completo: ', koder.fullName)

// setters
koder.ageKoder = 47
koder.fullName = ['jorge luis', 'camarillo']

// getter y setter de 
/**
 * 
 * 1. getter average
 * 2. getter, setter IMC 
 * 3. setter Score
 * 4. setter newProperty
 * 
 * 
 */

// 1. getter average
Object.defineProperty( koder , 'averagekoder', {
    get() {
        return this.average.reduce((acc, cv) => acc += cv, 0) / this.average.length
    }
})
console.log(koder.averagekoder)


// 2. getter, setter IMC
koder.weight = 90
koder.height = 1.73 
Object.defineProperty( koder , 'IMCKoder', {
    get() {
        return this.weight / (this.height * this.height)
    },
    set(value) {
      this.IMC = value
    }
})
console.log(koder.IMCKoder)
koder.IMCKoder = koder.IMCKoder


// 3. setter Score
Object.defineProperty( koder , 'score', {
    set(score) {
        this.average.push(score)
    }
})

koder.score = 6

// 4. setter newProperty
Object.defineProperty( koder , 'newProperty', {
    set(objProp) {
        this[objProp.nameProperty] = objProp.valueProperty
    }
})

koder.newProperty = {
    nameProperty: 'Nueva propiedad',
    valueProperty: 'nuevo valor'
}

/**
 * Estudiar DOM 
 * CSS y HTML
 */

