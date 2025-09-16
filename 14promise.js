//overcome the callback
//asyncronous tp synchronous
//catch - its used for catch the errror and display
//syntax - return new Promise((resolve, reject) => {})
//we must use .then and .catch

function scan(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
        const a= true
        if(a){
        resolve("Scan the QR")
        }   
        else{
            reject("I am not scan the QR")
        } 
        },5000)

    })
}
function payment(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
           const b = false 
        if(b){
        resolve("payment done")
        }   
        else{
            reject("payment not paid")
        } 
        },5000)

    })
}
function statu(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const c = true
        if(c){
        resolve("Blue tick")
        }   
        else{
            reject("payment failed")
        } 
        },3000)

    })
}

// scan()
// .then(val => {console.log(val); return payment()})
// .catch(val => {console.log(val); return statu()})
// .then(val => {console.log(val)})

//reject
//async and await await can only use inside async

async function js(){
    try {
        const a = await scan()
        console.log(a);
        const b = await payment()
        console.log(b);
        const c = await statu()
        console.log(c);
        
    }catch (err){
        console.log(err);
    }
}
js();