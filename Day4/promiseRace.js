/*
    
    - Promise.race([]) - It returns the value of the first promise that is resolve or rejected
    
    - It only returns the value of the first promise which is either resolved or rejected.
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

const result = Promise.race([p1, p2, p3]);
result
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
})