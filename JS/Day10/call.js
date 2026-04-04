/*
    Call - it is a method avaiable for every function in js which is used to 
    bind the obj to a function for one use.

    # Note: Unlike bind() mehtod it doesn't return a new function.

    # Note: While creating polyfill for the call method, we need to make the function 
      on which we are calling the polyfill (mycall), the method of the user obj

      Later, we. need to delete it
*/

const user = {
    firstName: "Aryan"
}

// this is set to user
function printName(){

    console.log(this.firstName);
}

// doesn't return a new function
// printName.call(user);
Function.prototype.mycall = function(obj, ...args){

    // printName is this, accessing printName
    // exeFun is printName
    const exeFun = this;

    // creating an method in user obj, assigning it to printName
    // making printName a method of tempFun
    user.tempFun = exeFun;

    // calling printName through tempFun - because it is a method of printName now
    // passing hello back
    user.tempFun(...args)

    // call only sets the obj for a function once; therefore, 
    delete user.tempFun;

}

// printName is this inside the Function.prototype.mycall()
printName.mycall(user, "Hello", "Hi");
