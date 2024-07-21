//for loop

for(let i = 10; i >= 0; i--){
    console.log(i)
  }

for (let i=1; i<=10 ; i++){
    console.log(`outer loop value : ${i}`);
        for (let j=1 ; j <=10; j++) {
    console.log(i+'*'+j+'='+i*j);   
            
    }
}

let myArray=["kolkata","durgapur","asansole"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   console.log(element); 
}


for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }
  
  for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }
  
 

//while loop

let i = 0
while (i <= 5) {
  console.log(`value of i is ${i}`)
  i+=2
}


let myArr=["kolkata","durgapur","asansole"]
let arr=0
while(arr<myArr.length){
    console.log((`city name is ${myArr[arr]}`));
    arr=arr+1
}

//do while loop

let score= 10
do {
  console.log(`score is ${score}`)
  score++
} while (score <= 20)



