// //length:
// toUppercase():
// toLowercase();
// CharAt(index):
// indexOf():
// lastIndexOf():
// Slice();
// sustring():
// replace():
// replaceAll():
// trim():
// split():
// join():
// concat(): join two or more string
// startWith(): chk the start (print booleen true or false)
// endWith():
// includes(): chk the character included or not print boolean true or false


let str ="hello java welcome to java world";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(6));
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("a"));
console.log(str.slice(10));
console.log(str.substring(0,12)); //it is a index(consider from 0) 
console.log(str.replace("jave","javscript")); //first string (java) is which want to change second string (js) is which want to print
console.log(str.replaceAll("java","js"));   //first string (java) is which want to change all second string (js) is which want to print all
console.log(str.trim());        // trim the space before and after the string
console.log(str.split("java", 6));          // syntax - (separate,limit) here java is separate and 6 is limit
console.log(str.split("java", 5).join(""));  //join the string after split
console.log(str.concat("nice to meet you"));   //add the string
console.log(str.startsWith("l"));   //chk the starting letter or word and print the boolean true or false
console.log(str.endsWith("d"));     //chk the end letter or word and print the boolean true or false
console.log(str.includes("w"));     //chk includes or not and print the boolean true or false

 //task - print Uppercase to Start latter

let madras = "chennai city center";
console.log(madras.replaceAll("c", "C"));
