//Conditional

//if
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}

//operator
//== : equivalent
//=== : equal in value and data type


if(3 == '3'){
    console.log("executed");
}  


if(3 === '3'){
    console.log("executed");
}
else {console.log("error");
}

//Ternary Operators
let isRaining = true
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')

isRaining = false
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')


//nested if_else


let day = 'cloudy'
if (day === 'rainy') {
  console.log('You need a rain coat.')
} else if (day === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (day === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}


const userLoggedIn = true
const debitcard = true
const loggedInGoogle = false
const loggedInEmail = true

if (userLoggedIn && debitcard){
    console.log("allow to buy something");
}
if(loggedInGoogle||loggedInEmail){
    console.log("logged in");
}


//Switch case

let weather = 'rainy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}
