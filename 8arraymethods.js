//we can store all types of methods string, number, boolean, null, undefined, obect, array in array 

//map - map the each one value and print the new array
//filter
//reduce

//map
//iterate each and every element from the array
//transforming into element
//return a new array

let number = [2,4,6,5,7]
let mapValue = number.map(x=>x*2);    //x arrow fn so value to x and each value multiple with 2 and print in new array
console.log(mapValue);

//filter

let numbers = [20,4,5,56,67,8,'ram','sindhu','sindhuram']
let filterVal = numbers.filter(x=>x>10)       //if we use filter must call the condition, we can use any type of values
let filterVals = numbers.filter(x=>x.length>3,x=>x>10)      //we can use any type condition
console.log(filterVal);
console.log(filterVals);

//reduce - we can use two or more parameter, but minimum we need to use two parameter

let num = [10,20,30,40,50,60]
let reduceVal = num.reduce((acc,current) => acc+current);    //acc+current(10+0 30+30 60+40 100+50 150+60) its print single value  
console.log(reduceVal);
let arry = []
arry.push(reduceVal);
console.log(reduceVal);

//pop

let array = [0,1,2,3,4,5,6]
let newArray  = array.pop()    //remove the last element from the array ana print also print the totall arr element counts
console.log(newArray);
console.log(array);

//push

let aray = [0,1,2,3,4,5,6]
let newArry = aray.push(11,'hello','hi')    //add the last element after the array and print also print totall counts of array elements, we can give any tpe of value and datatypes
console.log(newArry);
console.log(aray);

//shift  - remove the first value from the array

let shif = [0,1,2,3,4,5,6]
let newShif = shif.shift()    //remove the first index value in the array and print we can give any tpe of value and datatypes
console.log(newShif);
console.log(shif);

//unshift

let unshif = [0,1,2,3,4,5,6]
let newunShif = unshif.unshift(100)    //add the gvn ellement(100) in first and print the totall element in the array
console.log(newunShif);
console.log(unshif);

//reverse

let reve = [0,1,2,3,4,5,6]
let newRev = reve.reverse()    //print all values as reverese from the array
console.log(newRev);

//slice

let slice = [0,1,2,3,4,5,6]
let newSlice = slice.slice(2,4)    //what we wnat to print the values from the array (start index to end(its stop befor one index) ) 
console.log(newSlice);

//concat -  is a merge, merge the values and print in new array from the array 

let arr1 = [1,2,3,4,5,'aaa','cc','bb']
let arr2 = [6,7,8,9,0,5]
let arr3 = [4,5,6,7,2,5]
let newArr = arr2.concat(arr1,arr3,arr1);  //its used for merge the array, merge the array value like any 
console.log(newArr);

//split -  its used to string to array split and print the value in ne array

let sentence = "hi this is sriram form chennai";
let newSen = sentence.split("");
console.log(newSen);
console.log(sentence);

//sort - prin the ascending order in the new array from the array values

let fruits = [2,4,5,6,6666,888,77.77,'cherry','kiwi','grapes','banana','apple']
let sortVal = fruits.sort()
console.log(sortVal);
