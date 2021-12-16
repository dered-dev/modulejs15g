
// const myPromise = new Promise();
const myPromise = new Promise((resolve, reject) => {  
    // condition
    let condition = true  
    if(condition == true) {    
        resolve('Promise is resolved successfully.') 
    } else {    
        reject('Promise is rejected') 
    }

})

myPromise.then((response)=> {
    console.log(typeof response)
    console.log(response)
})