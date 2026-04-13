/*

    Q. How Promises help us to avoid callback hell and Inversion of control?
    
    Promises avoid help us to resolve callback hell by creating chain of promise known as promise chaining. 
    In promnises, we don't pass a callback function instead we chain on the promise object being returned by
    the function call. 

    Promises make sure that our function executes because it will either resolve the promise or 
    reject the promise object.

    Q. Promises also resolve Inversion of control
    Promises also resolves Inversion of control because we are not passing a callback function during function
    invokation, we are returning a pormise obj which is either resolved or rejected.

*/

function userInfo(userId){

    return new Promise((resolve, reject)=>{
        resolve(userId);
    })
}

function createOrder(cart){
    return new Promise((resolve, reject)=>{
        resolve(cart);
    })
}

function proceedToPayment(message){
    
    return new Promise((resolve,reject)=>{
        resolve(message);
    })
}

function showSummary(...args){
    
    return new Promise((resolve, reject)=>{
        resolve(args);
    })
}


const userId = 1;
const cart = ["Pant", "Shirt"];

// returns Promise A
userInfo(userId)

// creates Promise B, wait for C to resolve
.then((res)=>{
    console.log(res);
    // returns Promise C
    return createOrder(cart);
})
.then((res)=>{
    console.log(res);
    return proceedToPayment("Payment has been done");
})
.then((res)=>{
    console.log(res);
    return showSummary(userId, cart)
})
.then((res)=>{
    console.log(...res);
    console.log("All the process have been completed")
})
.catch((err)=>console.log(err));