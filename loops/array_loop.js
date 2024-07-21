//forof loop

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}


const webTechs = [ 'HTML','CSS','JavaScript','React','Redux', 'Node', 'MongoDB']
  for (const tech of webTechs) {
    console.log(tech.toUpperCase())
  }



//Maps : object holds key-value pairs and members that original insertion of keys(print unique values(no repetation))
        //Maps is non iterateble

const map = new Map()
map.set('In' , "India")
map.set('En' , "England")
map.set('USA' , "United States of America")
map.set('In' , "India")

console.log(map);

for(const [key,value] of map){
    console.log(key,':',value);
}



//forin loops

const myObject ={
    cpp: "C++",
    css:"Casceding Style Sheet",
    js:"JavaScript"
}
for (const key in myObject) {
   console.log(`${key} is shortcut of ${myObject[key]}`);
}


const prog =["js","css","java","C++","python"] 
for (const key in prog) {
   console.log(key);
   console.log(prog[key]);
}


//forEach

//printing methods: 

const codingLan = ["html","css","js","python","nodejs","react","c++"]

/*codingLan.forEach(function (item){
    console.log(item);
          }
)*/

/*codingLan.forEach((item)=>{
    console.log(item);
       }
)*/
/*
function printThis(item){
    console.log(item);
}
codingLan.forEach(printThis);
*/
codingLan.forEach((item , index, arr)=>{
    console.log(item,index,arr);}
)


const myPractice=[
    {
      languageName :"javascript" , 
      shortForm :"js"
    },
    {
        languageName :"Casceding Style Sheet" , 
        shortForm :"css"     
    },
    {
        languageName :"python" , 
        shortForm :"py"     
    },   
]
myPractice.forEach((item)=>{
    console.log(item.languageName , ':' ,item.shortForm);
    //console.log(item.shortForm);
        }
    )