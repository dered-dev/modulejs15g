
/**
 * Dado un array
 * ['colima', 'colombia','Estado de mexico']
 * 
 * EScuchar el evento keyup en un input
 * Filtrar del array las coincidencias
 * Pintar las coincidencias en una lista
 * 
 */

let cities = ['colima', 'colombia','Estado de mexico']

const filterCity = () => {
    // filtrar ciudades
    let citySearch = document.querySelector('#name__city').value
    let citiesFiltered = cities.filter( (city) => {
        if(city.includes(citySearch) === true){
            return city
        }
    })

    // creo el layout con las ciudades filtradas
    let lista = ''
    citiesFiltered.forEach( (value) => {
        lista += `<li>${value}</li>`
    })

    // agrego el layout
    document.querySelector('#listCity').innerHTML = lista
}



let koders = [
    {
        name: 'emilio',
        age: 30,
        city: 'Guadalajara'
    },
    {
        name: 'emilio',
        age: 30,
        city: 'guanajuato'
    },
    {
        name: 'Brisset',
        age: 37,
        city: 'Lima'
    }
]


// FUncion => tarea especifica

const filterKoders = () => {
    // filtrar ciudades
    let KoderSearch = document.querySelector('#name__koder').value.toLowerCase()
    let KoderTerm = document.querySelector('#filterby').value.toLowerCase()
    console.log(KoderTerm)

    let kodersFiltered = koders.filter( (koder) => {
        console.log(koder)

        // if( koder.name.toLowerCase().includes(KoderSearch) ){
        //     return koder  
        // }

        
        let koderTerm = typeof koder[KoderTerm] !== 'number' ? koder[KoderTerm].toLowerCase() : koder[KoderTerm]
        console.log(koderTerm)

        if(KoderTerm === 'age') {
            if((koderTerm).toString().includes(KoderSearch) === true){
                return koder
            }
        } else  {
            if(koderTerm.includes(KoderSearch) === true){
                return koder
            }
        }
    })

    console.log(kodersFiltered)

    // creo el layout con las ciudades filtradas
    let lista = ''
    kodersFiltered.forEach( (koder) => {
        lista += `
            <li>
                <strong>${koder.name}</strong>
                <span>${koder.age} años</span>
                <span>${koder.city}</span>
            </li>
        `
    })
    console.log(lista)

    // agrego el layout
    document.querySelector('#listKoders').innerHTML = lista
}

const filterKoder = () => {
    filterKoders()
}



const changeFilter = () => {
    filterKoders()
}
