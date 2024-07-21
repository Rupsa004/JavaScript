               //Function Declaration

               function addTwono(no1,no2){      //func. with 2 parameter
                //let result = no1+no2
               // return result
               return no1+no2
            }
            const result= addTwono(3,6)
            console.log("Result: ", result);
                                                        
            
            function loginUser(username){                      //func with 1 parameter
                //if(username===undefined)
                if(!username){
                    console.log("please enter username");
                    return
                }
                return `${username} just logged in`
            }
            
            console.log(loginUser("Rupsa"));
            console.log(loginUser()); //undefined
            
            
            function calculateThePrice(...num1)
            //function calculateThePrice(val1,val2,...num1)[comes without val part]
            {
                return num1                     //... : rest/ spread operator depends on situation( the rest operator is used to gather elements into an array, while the spread operator is used to spread the content of an array)
            }
            console.log(calculateThePrice(264,75,344,654));
            
            
            const user={
                userName:"Rai",
                id:43245
            }
            function handleuser(anyobject){
                console.log(`username is ${anyobject.userName} and id is ${anyobject.id}`);
            }
            handleuser(user)
            
            
            const myArr=[543,76,3234,875]
            function returnValue(getArray){
                return getArray[2]
            }
            console.log(returnValue(myArr));
            
            
            function printFullName (){
                let firstName = 'Rai'
                let lastName = 'Adhikary'
                let space = ' '
                let fullName = firstName + space + lastName
                console.log(fullName)
            }
            printFullName() // calling a function  //func. without parameter and return
            
            
            
            function addTwoNumbers() {     //func with returning value
                let numOne = 75
                let numTwo = 97
                let total = numOne + numTwo
                return total
            
            }
            
            console.log(addTwoNumbers())
            
            
            function sumAllNums() {
              let sum = 0
              for (let i = 0; i < arguments.length; i++) {    //func with unlimited no of parameters
                sum += arguments[i]
              }
              return sum
            }
            
            console.log(sumAllNums(1, 2, 3, 4)) 
            console.log(sumAllNums(10, 20, 13, 40, 10))  
            console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)) 
            
            
            
            const sumAllNos = (...args) => { //Arrow function does not have the function scoped arguments object
              let sum = 0
              for (const element of args) {
                sum += element
              }
              return sum
            }
            
            console.log(sumAllNos(1, 2, 3, 4)) 
            console.log(sumAllNos(10, 20, 13, 40, 10))  // console.log(arguments), arguments object not found in arrow function
                                                        // instead we use a parameter followed by spread operator (...)
            
                                            
                                            //Anonymous Function
            
             const anonymousFun = function() {
                        console.log(
                          'I am an anonymous function and my value is stored in anonymousFun' )
                  } 
                anonymousFun()  
            
            
                                 // Function expression(this are anonymous func.)
            
            const square = function(n) {
                return n * n
              } 
              console.log(square(2)) //To return a value from the function, call the variable
            
            
                               //Self Invoking Functions
            
              let squaredNum = (function(n) {
                return n * n
              })(10)
              console.log(squaredNum)//do not need to be called to return a value.
            
            
                                // Arrow Function
            
              const sq = n => {
                return n * n
              }
              console.log(sq(2)) 
            
              const mul = n=>n*n
              console.log(mul(2));
            
            
              const printName = (firstName, lastName) => {
                return `${firstName} ${lastName}`
              }
              console.log(printName('Rai', 'Adhikary'))
            
            
                             //Function with default parameters
            
              function greetings(firstname = 'Rai' , lastname='Adhikary') {
                let space=' '
                let fullname = firstname+space+lastname
                let message = `${fullname}, welcome to the Hello World`
                return message
              }
              console.log(greetings())
              //console.log(greetings('Rupsa')) //pass default value. and when invoke func. and dont pass argument , the default value will be passed