/* 
   1. Promise.allSettled() - It will wait for all the promises to be settled no matter they fail or succeed.

   - It returns an array of objects: 
   1. { status: 'fulfilled', value: 1 } 
   2. { status: 'rejected', reason: 'cart not received' } 
   3. { status: 'fulfilled', value: 'Payment has been done' }

   - Each object has a status and value - 'status', 'value', 'reason'

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

const result = Promise.allSettled([p1, p2, p3]);
result
.then((res)=>{
    const [userId, cart, message] = res;
    console.log(userId, cart, message);
})
.catch((err)=>{
    console.error(err);
})