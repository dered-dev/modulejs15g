/**
 * AJAX
 * Asynchronous JavaScript And XML.
 * 
 * https://www.javascript-coder.com/tutorials/images/ajax-block-diagram1.jpg
 * https://jsonplaceholder.typicode.com/posts
 * 
 */

const xhttp = new XMLHttpRequest()
xhttp.onload = function(data) {
    if(data.target.status === 200){

        // console.log(data)
        //console.log(data.target.response)
        // console.log(data.target.status)
        console.log( JSON.parse(data.target.response) )
    }
}
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
xhttp.send()




const getData = (url, funcionALlamar, selector, method = 'GET') => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return 
        } else {
            // status code
            if(request.status >= 200 && request.status <= 299){
                const response  = request
                const objectResponse = JSON.parse(response.responseText)
                funcionALlamar(selector, objectResponse)
            } else {
                console.log('No se pudo ejecutar')
            }
        } 
    
    })
    request.open(method,url)
    request.send()
}


