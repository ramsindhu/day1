//callback or callbackhell mainly its used to covert to Asynchronous(process one by one print without order) to Synchronous(print by order)
//its a connecting the fn
//if two more fn will belongs to callback

function box1 (callback){
    setTimeout(() => {
        console.log("Loading");
        callback()
    }, 5000);
    }
function box2 (callback){
    setTimeout(() => {
        console.log("Loading Sccessfull");
    }, 500);
    }
    box1(box2)


    
    function box1 (callback){
    setTimeout(() => {
        console.log("Loading");
        callback()
    }, 5000);
    }
function box2 (callback){
    setTimeout(() => {
        console.log("Loading Sccessfull");
        callback()
    }, 500);
    }
    
    //box2(box1);
    function box3(callback){
        setTimeout(() =>{
            console.log("Finish")
        })
    }
box1(()=>{                               //its a syntax box1-->box2-->box3
    box2(()=>{
        box3()
    })
})