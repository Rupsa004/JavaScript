const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

let lastIndex = numbers.length -1 //length=6
lastnumber = numbers[lastIndex]
console.log(lastnumber);


console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)
console.log(webTechs[1]);


//Array-copy-operation in js : creat Shallow copy: an obj. is a copy whose properties share the same ref. as those of source obj. from which the copy was made (change in original as well)
//Deep copy: do not share same ref. 


        /*methods*/

let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)


const myarr = [5,2,76,53,2,8,43]
myarr.push(4)
myarr.pop()        //remove last value
myarr.unshift(8)  //add at the first
myarr.shift()    //remove at the first
console.log(myarr);


const newarr = [2,43,12,65,3,9,3]
console.log(newarr.includes(2));
console.log(newarr.includes(34));
console.log(newarr.indexOf(65));
console.log(newarr.indexOf(87));

const newaray = newarr.join()
//console.log(newarr);
console.log(typeof newaray);


const number = [1, 2, 3, 4, 5]
number[0] = 10 
console.log(number);//modifying
number.reverse()
console.log(number);//reverse


const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) 

const eightValues = Array(6).fill('xyz')
console.log(eightValues);

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList) 


const num = [1, 2, 3, 4, 5, 6, 7]
console.log(num.join()) //joining


                    //Slice and Splice//

const myArray = [0,1,2,3,4,5,6]

console.log("A ", myArray);
const myn1 = myArray.slice(1,4)  // it doesn't include the ending position
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,4) //include ending position
console.log(myn2);
console.log("C ", myArray); // remove the splice portion


const fruits = ['mango','litchi','banana','apple']
fruits.sort()
console.log(fruits); //arrange in ascending order


//array of arrays

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]
const fullNums=[firstNums,secondNums]
console.log(fullNums);
console.log(fullNums.length);
console.log(fullNums[0]);
console.log(fullNums[1]);

const totalnums = [...firstNums, ...secondNums]
console.log(totalnums); //adding another mathod


const another_array = [1,2,4,[5,6],5,4,[3,2,9, [7,8]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
//returns a new array will all sub array elements concat. into it recursively up to the specified depth


console.log(Array.isArray("Rai"))
console.log(Array.from("Rai")) //convert to array


let score =54
let score1 =65
let score2 =97
console.log(Array.of(score,score1,score2));