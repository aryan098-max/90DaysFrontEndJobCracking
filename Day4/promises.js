/*  
    Promise: It is an obj which represents eventual success or failure of async 
    operations. It has three states 

        1. Pending, this transists to 
        2. Fulfilled
        3. Rejected

    Note: Once a state of a promise is changed it can't be changed into previous state. So, 
    promise is immutable. 


 
 */

// pending - , fulfilled or rejected - resolve(), reject() - function 

// function Promise(){} a obj empty obj constructor is called // protoype of the Prmoise constructor

function givePizza(){

    // returning you a recepit 
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve("Pizza is given");
        }, 5000)
    })
}

const promise = givePizza();

// clearly observe the state of the promise
console.log(promise);

promise.then((res)=>{
   console.log(res); 
}).
catch((err)=>{
    console.log(err);
})