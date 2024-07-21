// truthy and falsy : 
//assume some value or value that are coerced into teue : Truthy
//value that are coerceed into false : Falsy

const userEmail = "rai004@gmail.com"
//const userEmail =""
//const userEmail=[]
//const obj={}

if(userEmail){
    console.log("got the user email");
}
else{
    console.log("don't have email");
}
/*
if(userEmail.length===0){
    console.log("array is empty");
}

if (Object.keys(obj).length!=0){
    console.log("object is empty");
}
else{
    console.log("occupied");
}
*/



//Falsy value = false , 0 , -0 , BigInt (0n) , "" , null , unfedined , NaN

// truthy values ="0" , 'false' , " " (any values in string) , function( ) { }

/*
false ==0
false==''
0==''
all are true */


//Nullish Coalescing Operator (??) : null undefined

let val1;
//val1 = 5??10
val1 = null ?? 10

console.log(val1);