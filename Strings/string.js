
let space = ' '
let firstName = 'Rupsa'
let lastName = 'Adhikary'
let country = 'India'
let city = 'Kolkata'
let language = 'JavaScript'
let role = 'Student'
let age = 19

let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + ' years old'+ '. I live in ' + city + ' in ' + country+ '. I am a '+role;// ES5 string addition

console.log(personInfoOne)


const myname = new String('Rupsa')
console.log(myname[1]);
console.log(myname.toUpperCase())    
console.log(myname.toLowerCase()) 

let lastIndex = myname.length -1
console.log(lastIndex); //4
console.log(myname[lastIndex]); //t


let string='Javascript'
console.log(string.substr(4,6));
console.log(string.substring(0,4));
console.log(string.charCodeAt(1));//ASCII value
console.log(string.replace('Javascript' , 'Python'));


let spliting ='Splitting of Javascript'
console.log(spliting.split());
console.log(spliting.split(' '));


let strings = '  learning Js'
console.log(strings);
console.log(strings.trim(' '));
console.log(strings.includes('Js'));
console.log(strings.includes('js'));//check
console.log(strings.indexOf('J')); //ret position if exist


let expstring = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(expstring.lastIndexOf('love'));//last pos of substring


let concatenate = '30'
console.log(concatenate.concat(" Days ", " Of ", " JavaScript"))



let start = 'Love is the best to in this world'
console.log(start.startsWith('Love'))   // check the string starts with specific subs. ret boolean
console.log(start.startsWith('love'))

let end= 'Love is most powerful feeling in the world'
console.log(end.endsWith('world'))  //end
console.log(end.endsWith('love'))  



let argu = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(argu.search('love'))          //ret the index first match
console.log(argu.search(/javaScript/gi)); // g-means to search in the whole text, i - case insensitive


let matchsyntax = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(matchsyntax.match('love'))

let pattern = /love/gi
console.log(matchsyntax.match(pattern))   //appearence in matchsyntax


let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.
console.log(txt.match(/\d+/g)) 

let repeatingStatement = 'HelloWorld  '
console.log(repeatingStatement.repeat(5));


 
         /*Changing Data type*/

 //string to int(methods)

let num = '10'
let numInt = parseInt(num)
let numInts = Number(num)
let noInt = +num
console.log(numInt) 
console.log(numInts);
console.log(noInt);

//string to float

let no = '3.14'
let noFloat = parseFloat(no)
let numFloat = Number(no)
let nomFloat = +no
console.log(noFloat);
console.log(numFloat);
console.log(nomFloat);

//float to int
let float = 9.81
let integer = parseInt(float)
console.log(integer);


