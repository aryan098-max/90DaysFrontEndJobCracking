/**
    
    - Promise.all([p1,p2,p3]) - only returns a single promise at the last with results
      of all three promises inside an array. 

    - To make it look like an error we are going to use - console.error(err)
    - Even if one of the promise is rejected, it will return an error

 */

function userInfo(userId){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
           resolve(userId);

        }, 1000);
    })
}

function processCart(cart){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           reject("cart not received");

        }, 1000);
    })
}

function proceedToPayment(message){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(message);

    }, 1000);
  })
}

const userId = 1;
const cart = ["pant", "T-shirt"]
const p1 = userInfo(userId);
const p2 = processCart(cart);
const p3 = proceedToPayment("Payment has been done");

const result = Promise.all([p1, p2, p3]);
result
.then((res)=>{
    const [userId, cart, message] = res;
    console.log(userId, cart, message);
})
.catch((err)=>{
    console.error(err);
})