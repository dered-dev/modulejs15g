
$(document).ready(function () {
    let temp = ''
    for(i = 5; i <= 14; i++) {
        temp += `<li>item ${i}</li>`
    }
    $('ul').append(temp)
    $('ol').prepend(temp)

    $('.content').html('<p>Hola koder</p>')

    $('.content').css({
        'background-color': '#333',
        'color': '#fff'
    })

    $('body').prepend('<h1>Empty</h1>')
    $('body h1').text('Aprendiendo jQuery')



    

})