"use strict"; //treat all js code as a newer version. now all codes are read as new js

//alert(54+65) (we are using node js not browser)

console.log(4+8)

//data types= number, bigint , string , boolean , null (standalone value) , undefined , symbole(unique case)

let age =18
console.log(age)
console.log(typeof age);

console.log(typeof null) //object
console.log(typeof undefined) //undefined


       /*Datatype conversion confusion*/

let score= 56
let scores= "56"
console.log(typeof score);
console.log(typeof scores);

let valueInNumber= Number(scores)
console.log(typeof valueInNumber); //convert in no

let rank = null
console.log(typeof null)
let valueinNumber = Number(null)
console.log(typeof valueinNumber);
console.log(valueinNumber);

// "64sasd" => NaN (not a number) type number
// boolean => 1&0
//"" => false

let loggedIn=1
let booleanIsloggedIn = Boolean(loggedIn)
console.log(booleanIsloggedIn);

let someNumber = 99
let stringNumber= String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
