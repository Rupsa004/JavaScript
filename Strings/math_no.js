//Numbers

const balance = new Number(400)
console.log(balance);
console.log(balance.toString().length);

let num = (199/2)
console.log(num.toFixed(2));

const othernum = 654.85
console.log(othernum.toPrecision(3));

const no=10000000000000
console.log(no.toLocaleString());

const PI = 3.14       // pi a geometrical constant
console.log(PI)

 
             //maths//

console.log(Math);
console.log(Math.abs(-7));

console.log(Math.round(9.81));

console.log(Math.floor(PI)); //rounding down
console.log(Math.ceil(PI)); //round up 

console.log(Math.min(-5, 3, 20, 4, 5, 10))
console.log(Math.max(-5, 3, 20, 4, 5, 10))


const randNum = Math.random() //creat random no between 0-9
console.log(randNum);

console.log(Math.sqrt(144));

console.log(Math.pow(3, 3));

console.log(Math.E); //E = 2.718.........

console.log(Math.log(2));// Returns the natural logarithm with base E of x, Math.log(x)

console.log(Math.LN2);
console.log(Math.LN10); // Returns the natural logarithm of 2 and 10 respectively

console.log(Math.sin(0));
console.log(Math.sin(90));



//ramdom no generate

let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10