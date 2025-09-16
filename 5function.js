//function
//syntax

//function name() {}

function fun (){
var a = 10;
var a = 30;
console.log(a);

let b = 40;
b = 50;
console.log(b);

const c = 60;
console.log(c);

}

fun();

//function statemnet Declaration -- parameter and argument

function box (par){
console.log(par)
}
box("hello");

//Function Expression or Anonymous Function

// call the function in the variable

let funt = function box1 (hi){
    console.log(hi);

}

fun("world");

//immediate Invoke
//don't use the function var name

(function(iife){
    console.log(iife);
})
("function");

//Arrow Function
//Single line function
//syntax
//(){}

let aro = (js)=>{console.log(js)
    aro("arrow function");
}

