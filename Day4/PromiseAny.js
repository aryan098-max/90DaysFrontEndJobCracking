/*
      4. Promise. any([p1, p2, p3]) - (array of promises) - It will wait for first promise to be successful.
     
      - It will wait for the first success, if p2 fails it will still wait for the other promise to be
        resolve. 
      - It wait for the resolved promise.
      - What if all three promises fails? - If all three promises fails, it will return [Aggregated error]
        [error1, error2, error3]
      - It waits for the firt success but if all fails it will return all errror [err1, err2, err3]

    # Error
      PromiseAny.js:56 AggregateError: All promises were rejected
        (anonymous)	@	PromiseAny.js:56
        Promise.catch		
        (anonymous)	@	PromiseAny.js:55

    - To see the erorr you have to use - console.log(err.errros) 
    - Basically, err is the obj which has the property errors which is an array

*/



function userInfo(userId){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
           reject(userId);

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
        reject(message);

    }, 1000);
  })
}

const userId = 1;
const cart = ["pant", "T-shirt"]
const p1 = userInfo(userId);
const p2 = processCart(cart);
const p3 = proceedToPayment("Payment has been done");

const result = Promise.any([p1, p2, p3]);
result
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
    console.log(err.errors)
})