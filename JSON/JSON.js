//De stracture

const course={
    courseName :"Learning js",
    price:"999/-",
    courseInstractore:"Rai"
}
const {courseName} = course
console.log(courseName);
const {courseInstractore: Instractore} = course
console.log(Instractore);

        
                          //JSON API// JavaScript Object Notation

      // in JSON  keys and values all are in string format
//JSON object is a collection of name/value pairs where the names are strings, and the values can be strings, numbers, booleans, nulls, or even other objects. JSON objects are text and string


 //typing format//
 
/* {
    "Alpha": {
        "email": "alpha@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"],
        "age": 20,
        "isLoggedIn": false},
    
    "Beta": {
        "email": "beta@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"],
        "age": 21,
        "isLoggedIn": false},

        "Gama": {
            "email": "gama@gmail.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux"
            ],
            "age": 22,
            "isLoggedIn": true},

        "Niw": {
            "email": "niw@gmail.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
            "age": 20,
            "isLoggedIn": false }

}*/

    
                     //JSON.parse()//

const usersText = `{
    "users":[                
      {
        "firstName":"swfsfgdd",
        "lastName":"hgfgfg",
        "age":27,
        "email":"rew@gmail.com"
      },
      {
        "firstName":"yrtdf",
        "lastName":"jhfc",
        "age":25,
        "email":"tde@gmail.com"
      },
      {
      "firstName":"Lidyf",
      "lastName":"Tnhfc",
      "age":28,
      "email":"hff@gmail.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, (key, value) => {
      let newValue =
        typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
      return newValue
    })
    console.log(usersObj) // change the JSON to an object use JSON.parse() // also run it console on browser and see // users: key



                       //JSON.stringify//
    const users = {
        rerfg: {
          email: 'fsg@gmail.com',
          skills: ['HTML', 'CSS', 'JavaScript'],
          age: 20,
          isLoggedIn: false,
          points: 30
        },
        nbfbm: {
          email: 'hgfgh@gmail.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
          age: 30,
          isLoggedIn: true,
          points: 50
        },
        tyryu: {
          email: 'hghj@gmail.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        fshfg: {
          email: 'grtrf@gmail.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
          age: 20,
          isLoggedIn: true,
          points: 50
        }
      }
      
      const txt = JSON.stringify(users, undefined, 4) //4 space indentation.
      console.log(txt) // text means JSON- because json is a string form of an object. // object to JSON (string) use JSON.stringify()




                    //Filter Array with JSON.stringify//

      const user = {
        user1:{
        firstName: 'Rai',
        lastName: 'Adhikary',
        country: 'India',
        city: 'Kolkata',
        email: 'rai004@gmail.com',
        skills: ['HTML', 'CSS', 'JavaScript','Python'],
        age: 19,
        isLoggedIn: false,
        points: 30
      },
      user2:{
        firstName: 'Kaushiki',
        lastName: 'Adhikary',
        country: 'India',
        city: 'Durgapur',
        email: 'rai004@gmail.com',
        skills: ['HTML', 'CSS', 'JavaScript','Python','C'],
        age: 18,
        isLoggedIn: true,
        points: 40

      }
    }
      
      const text = JSON.stringify(user.user1,['firstName', 'lastName', 'country', 'city', 'age'],4)
      const textt = JSON.stringify(user.user2,['firstName', 'lastName', 'country', 'city', 'age'],4)
      //const text =JSON.stringify(user,undefined,4)
      console.log(text)
      console.log(textt); //The user object has long list of keys but want to see some of them. Put the keys and want to keep in array and use it the place of the replacer.


              //Replace//

    let jsonUser ={
            name:"Nandini",
            food:"Apple",
            id : 5345
    }
    console.log(jsonUser);
    let myJsonStr = JSON.stringify(jsonUser);
    console.log(myJsonStr);

    myJsonStr = myJsonStr.replace('Nandini' , 'Raha')
    myJsonStr= myJsonStr.replace('Apple' , 'Guava')
    console.log(myJsonStr);

    myJsonObj = JSON.parse(myJsonStr);
    console.log(myJsonObj);




               


                