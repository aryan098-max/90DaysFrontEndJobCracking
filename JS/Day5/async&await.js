/*
    1. async is a keyword in js which is used to create an asynchronus function which always returns a promise.
       
    2. await is a keyword we used inside the async function, we cna't use await outside an async function. 
       await pauses the code within the async function until the promise is resolved. 

    Q. Why do we need an async function? 
    -> We need an async function to make a Api call. The main advantage of using async function is that it doesn't
       block the main thread.

    Q. What is the difference between callback, promises and async & await

    1. Callback - Pass callback within the callback, callbackhell problem

    2. Promises - We use .then() handler to handle the promise obj. It is 
       a black box we have to use .then() handler to handle it.

       - Promises flattens the pyramid into chain, It has three states pending,
         fulfilled, rejected.
    
    3. async&await - 

       Concept: It is "Syntactic Sugar" over Promises. It makes asynchronous code 
       look and behave like synchronous (line-by-line) code.
    
       we don't have to use the .then() handler. It unwraps the promise before we
       are able to use it.


*/

// A promise is being passed is resolved
// async function snatchData(){

//     return await "Done";
// }

// const promise = snatchData();
// console.log(promise);
// promise.then((res)=>{
//     console.log(res);
// })

// It will also creates a promise but it adopts the state of the returned promise
// async function giveData(){

//    const p = await new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("I am giving the data wait for 2 seconds")
//         }, 2000);
//     }) // The benefit of this is if we are making an api call the next of line code won't execute unless 
//        // promise is resolved.

//     // console.log(p);

//     // It will wait for 2 seconds and only after the promise is resolved this line is printed
//     console.log("It will wait for 2 seconds");
//     return p;

// }

// const promise1 = giveData();
// promise1.then((res)=> console.log(res));

function givePizza(){

    return new Promise((resolve, reject)=>{
        // resolve is also sent to microtask queue or it executes normally
        resolve(1);
    })
}

const promise = givePizza();
console.log(promise);
promise.then((res)=> console.log(res));