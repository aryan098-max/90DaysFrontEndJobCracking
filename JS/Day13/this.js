/**
    1. this inside global scope
    2. this inside function (non strict mode)
    3. this inside function (strict mode)
    4. this inside an obj
    5. this with call, apply, and bind
    6. this inside arrow function 
       this with nested arrow function
    7. this with DOM elements
    8. this inside constructor function
 */

// Global Space
console.log(this) // window object

// Inside a function, it behaves different on strict and non-strict mode
// This inside non strict mode points to window obj
function a(){
    console.log(this);
}

a();


// this substition, in nonstrict mode the value of this undefined, however, here 
// this substitution comes into play as soon as it is null or undefined it is 
// assingned window object

function b(){

    console.log(this);
}

// Even though we are forcefully assigning this to null it substitues the value with 
// window object.
b.call(null);


// this inside an obj
const obj = {
    fName:"Aryan",
    userInfo: function(){
        console.log(this);
    }
}

obj.userInfo();
