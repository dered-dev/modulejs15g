const weather = prompt('como esta el clima en su ciudad? \n 1. Soleado \n 2. Lluvioso \n 2. Nevando \n 2. Nublado ')
const celsiusGrade = parseInt(prompt('¿Cual es la temperatura en tu localidad?'))

if(!isNaN(celsiusGrade)){
    let fahrenheitGrade  = (celsiusGrade * 9/5) + 32
    switch(weather) {
        case 'Soleado':
            console.log(`En tu ciudad, el día está 'Soleado' con una temperatura de ${fahrenheitGrade}ºF`)
        break
        case 'Lluvioso':
            console.log(`En tu ciudad, el día está Lluvioso con una temperatura de ${fahrenheitGrade}ºF`)
        break
        case 'Nevando':
            console.log(`En tu ciudad, el día está Nevando con una temperatura de ${fahrenheitGrade}ºF`)
        break
        case 'Nublado':
            console.log(`En tu ciudad, el día está Nublado con una temperatura de ${fahrenheitGrade}ºF`)
        break
        default:
            console.log(`No entiendo cual es el clima`)
    }
}


