//filter

const num =[1,2,3,4,5,6,7,8,9]

/*const newNums = num.filter((num)=> num>4)*/

/*const newNums= num.filter((num)=> {
    return num>4}
    )*/

//using forEach
const newNums =[]
num.forEach((num)=> {
    if(num>4){
        newNums.push(num)
    }
  }
)
console.log(newNums);


const books =[
    {
        title :'Book1' , publish : '2000', genre :'english'
    },
    {
        title :'Book2' , publish : '2021', genre :'hindi'
    },
    {
        title :'Book3' , publish : '2007', genre :'math'
    },
    {
        title :'Book4' , publish : '2021', genre :'math'
    },
    {
        title :'Book5' , publish : '2006', genre :'history'
    },
    {
        title :'Book6' , publish : '2010', genre :'geography'
    }
]
const userbooks= books.filter((bk)=> bk.publish==='2021')
const userbook= books.filter((bk)=> {return bk.publish < 2020 && bk.genre==='math'})

console.log(userbooks);
console.log(userbook);



const numbers=[1,2,3,4,5,6,7,8,9,10]
const Newno = numbers.map((num)=> {return (num+10)})
console.log(Newno);

const newnums = numbers
                .map((num) => num*10)
                .map((num)=> num+1)
                .filter((num) => num>40)
console.log(newnums);



//reduce()

/*const arr =[1,2,3,4]
const initialValue =0;
const sumWithinitial = arr.reduce(
    (accumulator , currentvalue) => accumulator + currentvalue, initialValue);
    console.log(sumWithinitial);  //currentvalue = arr //accumulator = empty variable(initialvalue store in accumulator)
    */

const arr=[1,2,3,4,5,6]
/*
const total =arr.reduce(function(acc,curr){
    console.log(`acc: ${acc} and curr :${curr}`);
    return acc + curr} ,0 )
*/
const total = arr.reduce((acc,curr)=> acc+curr ,0)
console.log(total);


const shoppingCart=[
    {
        itemName : "js course",
        price : 434
    }, 
    {
        itemName : "python course",
        price : 974
    },
    {
        itemName : "java course",
        price : 543
    }, 
    {
        itemName : "css course",
        price : 486
    }, 
    {
        itemName : "c++ course",
        price : 975
    }
]

const priceToPay = shoppingCart.reduce((acc , item)=> acc+ item.price ,0)

console.log(`total price is ${priceToPay}`);

