// GET
// VERbost http (POST, PUT, PATCH,  GET,DELETE)

// POST crear datos
const createUser =  (objUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "POST" , "https://genjs-292ac-default-rtdb.firebaseio.com/posts/.json", true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send( JSON.stringify(objUser) )
}
let objNewPost =  {
    author: 'Jorge luis',
    title: 'foo',
    body: 'bar lorem',

}
// createUser(objNewPost)

// PATCH actualizar datos
const updateUser =  (objUpdate, idUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "PATCH" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idUser}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send( JSON.stringify(objUpdate) )
}

let objUpdatePost =  {
    author: 'Jorge Luis Camarillo Cristobal',
    gender: 'M'
}

// updateUser(objUpdatePost, '-Mr550M_3YavOr8V9c6p')

// PUT actualizar todos los datos
const updateUserPUT =  (objUpdate, idUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "PUT" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idUser}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send( JSON.stringify(objUpdate) )
}

let objUpdateAllPost =  {
    author: 'Jorge Luis Camarillo Cristobal',
    title: 'foo update put',
    body: 'bar lorem put',
}
// updateUserPUT(objUpdateAllPost, '-Mr550M_3YavOr8V9c6p')


// DELETE Eliminar datos
const deleteUser =  (idUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "DELETE" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idUser}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send()
}
// deleteUser('-Mr550M_3YavOr8V9c6p')


