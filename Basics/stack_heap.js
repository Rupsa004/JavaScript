//stack(primitive) and heap(non primitive) memory

//stack

let myCityName ="Kolkata"

let anothername = myCityName
anothername = "Durgapur"

console.log(myCityName);
console.log(anothername);


//heap

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
console.log(userOne == userTwo);


let firstUser= {
    email: "rai004@gmail.com",
    upiId : "rai@ybl"
}
let secondUser = firstUser

secondUser.email = "rai002@gmail.com"

console.log(firstUser.email);
console.log(secondUser.email);
