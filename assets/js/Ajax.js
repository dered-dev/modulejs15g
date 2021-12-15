/**
 * AJAX
 * Asynchronous JavaScript And XML.
 * 
 * https://www.javascript-coder.com/tutorials/images/ajax-block-diagram1.jpg
 * https://jsonplaceholder.typicode.com/posts
 * 
 */


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