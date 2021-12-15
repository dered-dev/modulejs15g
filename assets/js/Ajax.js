/**
 * AJAX
 * Asynchronous JavaScript And XML
 * Metodología
 * 
 * xmlhttprequest
 * .fetch()
 * 
 * https://www.javascript-coder.com/tutorials/images/ajax-block-diagram1.jpg
 * https://jsonplaceholder.typicode.com/posts
 * 
 */

// cliente
// armar el request
// enviar la peticion http
// verbos http
// POST, GET, PUT, PATCH, DELETE
// 
// server
// status code
// entender la peticion
// armar la respuesta
// enviar la respuesta


const xhttp = new XMLHttpRequest()

xhttp.onload = function(data) {
    if(data.target.status === 200){

        // console.log(data)
        //console.log(data.target)
        // console.log(data.target.response)
        console.log( JSON.parse(data.target.response) )
    }
}

xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
xhttp.send()






