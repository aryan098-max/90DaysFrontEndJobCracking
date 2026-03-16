/*
    1. Promise.all() - We need promise.all() when we want to make parallel api calls. It used to handle 
       multiple promises together. It takes array of promises as an input.

    - Promise.all([p1, p2, p3]) - It will make three parallel api calls and get the result.

    # Success Case
    - Diff scenario - p1(api call, takes 3 seconds to get the result)
    - (p2, takes 1 second to resolve)
    - (p3, 2 seconds to resolve)

    - Suppose, that all of them are success p1, p2, & p3 (all the api calls are success) ?
    - Now, the output will be an array of result of three promises
    - It will wait for all of them to finish - collect the result and return the result

    # Reject Case
    - If a promise is rejected - what if one of the promise rejected
    - Similar, to first case - we have three promises returning a result of the api call 
      at different timings.
    - Let's suppose that one of the promise (p2) fails as soon as it rejects - it will throw
      an error.
    - Whatever, error is thrown the ouput will be error, it is same error returned by p2.
    - Immediately, as soon as error happened it will return an error, after 1 second you will see 
      an error. It will not wait for other promises to be successful.
    - It will not wait for other promise to execute - what will happen to p1 and p3? Now ???
    - Once the api call is made - api request is made it is not possible to cancel the promise
      However, the result of the promise is error anyways.

  2. Promise.allSettled([p1, p2, p3]) - It returns results even after a promise is rejected [result, err, result]

    # Recover results from the successful promises even after one is rejected
    - Promise.allSettled([p1, p2, p3]) - all successful - returns [array of results]
    - If one of the promises is rejected - Promise.allSettled([p1, p2, p3]) - it will
      still wait for other promises to settled and it will return: [result1, err, result2]
    - 

  3. Promise.race([p1, p2, p3]) - as the name suggests the promise which resolves first will be returned
     p2 will be returned because it resolves first. Value of the first resolved promise is returned.

     - What if first promise returned an error (rejected) - error will be thrown. It will return result
       of first settled promise. 
     - It doesn't matter whether a promise is resolved or rejected, it will return the first resolved or
       rejected promise.

  4. Promise. any([p1, p2, p3]) - (array of promises) - It will wait for first promise to be successful.
     
      - It will wait for the first success, if p2 fails it will still wait for the other promise to be
        resolve. 
      - It wait for the resolved promise.
      - What if all three promises fails? - If all three promises fails, it will return [Aggregated error]
        [error1, error2, error3]
      - It waits for the firt success but if all fails it will return all errror [err1, err2, err3]
    

*/

function userInfo(userId){
    return new Promise((resolve, reject)=>{
        resolve(userId);
    })
}

function processCart(cart){
    return new Promise((resolve, reject)=>{
        resolve(cart)
    })
}

function proceedToPayment(message){
  return new Promise((resolve, reject)=>{
    resolve(message);
  })
}

const userId = 1;
const cart = ["pant", "T-shirt"]
const p1 = userInfo(userId);
const p2 = processCart(cart);
const p3 = proceedToPayment("Payment has been done");

const result = Promise.all([p1, p2, p3])
// .then((results)=>{
//   console.log(...results);
//   console.log("All tasks are completed concurrently");
// })
// .catch((err)=>{
//   console.log("One of the promises failed", err);
// })
