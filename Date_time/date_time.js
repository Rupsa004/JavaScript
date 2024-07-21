//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());//only date
console.log(myDate.toLocaleString()); //perfect
console.log(typeof myDate);

let myCreatDate = new Date(2024,5,29) //month start with 0 in js
console.log(myCreatDate.toDateString());
console.log(myCreatDate.toLocaleDateString());

let newcreatDate = new Date(2024 ,5,29, 23,32)
console.log(newcreatDate.toLocaleString());   //India wining t20 World cup this time


//times

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1st Jan 1973- today in  millisecond
console.log(myCreatDate.getTime());

console.log(Math.floor(Date.now()/100)); //Convert miliisec in sec //floor: rounding down

let date = new Date()
console.log(date);
console.log(date.getMonth()+1);
console.log(date.getDate());

date.toLocaleString('default', {
     weekday:"long"
}) //defined object // ctrl+space : property
