
              //objects//

//An object created by the object literals is a singleton. This means when a change is made to the object, it affects that object across the entire script. If an object created by a function constructor has multiple instances of the object

const mysym= Symbol("key1")

const myUser ={
    name : "Rai",
    "Full name" :"Rai Adhikary",
    [mysym]: "mykey1", //use [] for symbol
    age: 19,
    location : "Kolkata",
    email: "rai004@gmail.com",
    isLoggedIn : false,
    lastLogin: ["monday" , "tuesday"]
}
//console.log(myUser.name);
console.log(myUser["Full name"]);
console.log(myUser["age"]);
console.log(typeof myUser.mysym);
console.log(myUser[mysym]);

myUser.email ="adhikary004@gmail.com"
console.log(myUser["email"]);

//Object.freeze(myUser)
myUser.location="Durgapur"
console.log(myUser["location"]);//Freeze


myUser.greeting = function(){
    console.log("Hello World");
}
console.log(myUser.greeting());




//string Iterpolation :  interpolation is the process of inserting strings or values into an existing string for various purposes.

let str = "I am a value in a variable";
let newStr = `This string contains a variable that is interpolated into the template literal: ${str}.`;
console.log(newStr);



myUser.greetingTwo = function(){
    console.log(`Hello World , ${this.name}`); //this. : see the properties
}
console.log(myUser.greetingTwo());


const person = {
  firstName: 'Rai',
  lastName: 'Adhikary',
  age : 19,
  country:'India',

getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(person.getFullName());



/*singleton*/

/*const user = new Object() //singleton
const user = {}  //non
console.log(user);*/

const freeUser ={}

freeUser.id="53agtf"
freeUser.name="rai"
freeUser.isLoggedIn=false

console.log(freeUser);
console.log(Object.keys(freeUser)); //datatype : Array
console.log(Object.values(freeUser));
console.log(Object.entries(freeUser)); //Array in Array

console.log(freeUser.hasOwnProperty('email')); //available or not : boolean


//Objects in object

const realUser ={
    email:"rai004@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Rupsa",
            lastName:"Adhikary"
        }
    }
}
console.log(realUser.fullName.userFullName);


//concat
const obj1 ={1:"a" , 2:"b"} //target
const obj2={3:"c" , 4:"d"}  //source
const obj3={5:"e" , 6:"f"}  //source
//const obj4= Object.assign({}, obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
console.log(obj4);



const users =[
    {
        id:"43fsdk",
        cityName:"Kolkata"
    },
    {
        id:"42hghf",
        cityName:"Durgapur"
    },
    {
        id:"41utuj",
        cityName:"Asansole"
    }
]
console.log(users[0].cityName);
