/*
    Callback hell is a situation where our code increases horizontally instead of vertically. This happnes
    because we pass a lot of callback within the callback.

    Inversion of Control: where we give the control of the code to anothe callback function, it doesn't gaurantee
    whether that callback function will execute or not. 

    This probelm using Promises. here we are going to reslove this with the help of handlers.


*/

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

function showSummary(userId, cart, callback){
    
    console.log(userId, cart);
    callback();
}



const userId = 1;
const cart = ["pant", "cart"];
userInfo(userId, function(){
    createOrder(cart, function(){
        proceedToPayment("Payment has been done", function(){
            showSummary(userId, cart, function(){
                console.log("All the process has been completed");
            })
        })
    })
});