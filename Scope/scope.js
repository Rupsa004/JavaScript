//var c =90 //cannot print (thats why avoid it(problematic))   //writen outer of the scope is Global Scope

let a = 65  //use it
if (true){
    let a =76                    //when {}comes with func or condition : Scope
    const b =79
    var c= 75                       //write in { }: local scope(block scope)
        console.log("Inner value: ", a);
}

console.log("Outer value: ",a);
//console.log(b);
//console.log(c); //only var is printed

//when us console on browser that time and when it run in code editor that time Global scope are different


//nested scope

function one(){
    const userName = "Rupsa"
    function two(){
        const watching = "youtube"
        console.log(userName);
    }
    //console.log(watching) ; //error // in nested func. child can access parent func.
    two()
}
one()


if (true){
    const name ="Rai"
    if(name==="Rai"){
        const surName = "Adhikary"
        let space = ' '
        console.log(name+space+surName);
    }
    //console.log(surName);//error canont access because it's scope is only the if block
}
//console.log(name);//error 



console.log(addno(5));
function addno(num){
    return num+1
}

/*
addAnother(5) //cannot access before initialization
const addAnother= function(num){
    return num +1
}*/


let lan = 'JavaScript' // is a global scope it will be found anywhere in this file
let no = 10 
function letsLearnScope() {
  console.log(lan, no) 
  if (true) {              // variables declared inside the if will not be accessed outside the if block
    let lan = 'Python'
    let no = 100
    console.log(lan, no) 
  } 
}
letsLearnScope()
//console.log(lan, no) 