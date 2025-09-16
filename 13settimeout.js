//settime out
//syntax setTimeout(() => {}, timeout);   
// here suppose the output will come first Loding and Loding Successful // without orader is called *Syncronous*
function box1 (){
    setTimeout(() => {
        console.log("Loding");
    },5000);
}
function box2 (){
    setTimeout(() => {
        console.log("Loding Successful");
  },1000);
}
box1()
box2()