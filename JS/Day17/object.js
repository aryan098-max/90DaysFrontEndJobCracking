/*

    1. singleton: Only one instance of obj is created creatd using class with some modification in the code. 

    2. Ways of creating objects

        1. object literals: A way of creating object using object literal, it helps us to create a singleton 
           obj

        2. Object.create(): Object is a contructor function with .create() method also helps us to create a
           singleton obj, but should be only executed once. It is more prefered way of creating a singleton
           obj,because we can set obj1.__proto__ using this constructor function

*/

// Declaring a symbol and access it using a key, interview question
const mySymbol = Symbol("key1");
console.log(mySymbol);


// obj created using object literal
// {} - this is a object
const user = {

    // using a symbol as a key we have to use [ ]
    [mySymbol]: "key2",

    // keys and values
    // firstName is eventually converted into "firstName"
    // value can be of any time
    firstName:"Aryan",
    // you can't access this value using dot
    "full Name":"Aryan Gupta",
    age: 24, 
    location: "Gurugram",
    email:"aryan123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],

    // adding a method inside a obj
    getIntro: function(){
        console.log(`My name is ${this.firstName}`);
    }
}

// logging the obj and monitoring what is shown in [mySymbol]
// When you log in the user, [mySymbol] is displayed as symbol
console.log(user);

// accessing object 
console.log(user.firstName);

// Since, the key is a string now, we need to access it using bracket noation
console.log(user["full Name"]);

// bracket Notation, dynamically accessing value
// However, the thing with bracket notation is that because keys are converted into "string",
// Therefore, we need also access it using "string"
console.log(user["firstName"]);

// accessing symbol
console.log(user[mySymbol]);

// chaning values inside an user obj
// user.email = "aryan1234@gmail.com";

// Frezzing a user, so that it can never be changed
// Now, this user obj can't be changed
// Object.freeze(user);

// changes will not be applied
user.email = "aryan098@gmail.com"

console.log(user.email);

// accessing method, this will give me a error here because we have freezed the obj
// Since, we have freezed the obj, we can't make changes anymore
console.log(user.getIntro());
console.log(user.getIntro) // just print that it is a functioon


