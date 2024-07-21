//Operation

let value = 2
let negValue = -value
console.log(negValue);

let str1="Hello"
let str2=" Rai"
let str3= str1 + str2
console.log(str3);



console.log("1" + "2");//12
console.log("1" + 2 + 2); //122
console.log(2 + 2 + "1");//41 
console.log(+true);     

let num1 , num2, num3 
num1=num2=num3=2+2      
//not a good conversion



let gameCounter =100
gameCounter++;
console.log(gameCounter);

//pre & post increment

let x=4;
const y= x++;
let postincrement = 'post increment values: '+' x: ' +x + ' and '+' y: ' +y;
console.log(postincrement);


let a=4;
const b= ++a;
let preincrement = 'pre increment values: '+' a: ' +a + ' and '+' b: ' +b;
console.log(preincrement);


        //comparisons(or relational)

console.log("02">1);
console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(undefined==0); // == and > different syntax
//not a good conv. always use same data type. unpredictable result

console.log("3"===3); // equality with data type

