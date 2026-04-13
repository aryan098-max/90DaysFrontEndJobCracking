/*
    1. Callback Hell 
    
    It is knowns as the pyramid of doom where code increases horizontally instead of 
    vertically. In simple words, callback hell is a situation where there is callback within a callback.

    Due to this our code is very difficult to maintain and read; therefore because of this reason promises
    comes into the picture

    
    2. Inversion of Control

    It is situation where we let another function handle our function (like in callback). 
    
    However, in promises attach a handler, which will execute hundred percent once a promise is 
    resolved. Promises allow us to avoid callback hell with the help of promise chaining. 

    In promises, we don't pass a callbck function, instead we attach a handler which executes after 
    a promise is resolved.
    
*/

// Let us imagine a situation where a user is ordering a prodcut from the cart.


function userInfo(userId, callback){
    console.log(userId);
    callback();
}

function createOrder(cart, callback){

    console.log(cart);
    callback();
}

function proceedToPayment(message, callback){

    console.log(message);
    callback();
}

function showSummary(user,cart,callback){

    console.log(user, cart);
    callback(); 
}

// Cleary, see that our code is increasing horizontally
const userId = 1;
const cart = ["Pant", "Tshirt"]
userInfo(userId, function(){
    createOrder(cart, function(){
        proceedToPayment("A payment has been done", function(){
            showSummary(userId, cart, function(){
                console.log("All the process has been completed");
            })
        })
    })
})