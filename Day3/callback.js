/** 
    Defintion: 
    A callback function is a function which is passed as an arg to a higher order function
    and this function is called later in the program.

    Note: Time, Tide & JavaScript wait for none.

    Callback function use in async function
    - Because JS is a single threaded language only one task executes inside the callstack at a time. 
      If we pass the callback function inside the async function. It will be executed later.

      Callback functions are very important in performing asycn operations.

    Q. Why callbacks are important? 
    1. One of the most important feature of callback function is Non-blokcking execution

*/


// async code
setTimeout(()=>{
    console.log("Timer");
}, 2000);

function provideName(callback, firstName){

    callback(firstName);
}

function sayHello(fname){

    console.log(`Hello ${fname}`);
}

let firstName = "Aryan";
provideName(sayHello, firstName)



