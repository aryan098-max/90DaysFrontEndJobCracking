/**
    
    1. A interesting thing we can observe about promises is that each .then() handler returns a promise 
    and if a promise is being returned from inisde the .then() handler. It will adopt the state of that 
    returned promise.

    2. The state of the second promise p2 is fulfilled because .then() handler executes without any 
       interruption.

       Even if the p1 is rejected or accepted it doesn't matter p2 only cares whether .then() handler
       executed properly or not.

    # Note: If we are returning a promise within the .then() handler the promise created by .then()
     accepts the result returned by that promise
 */



function givePizza(){

    return new Promise((resolve, reject)=>{

        resolve("Pizza is ready! Take your order!")
    })
}

function giveBurger(){

    return new Promise((resolve, reject)=>{
        reject("Burger is not ready");
    })
}


const p1 = givePizza()
// it creates a promise and it adopts the state and value being returned by the .then() handler
const p2 = p1.then((res)=>{
    console.log(res);
    return giveBurger(); // state , and the result
})

p2.catch((res)=>console.log(res))

setTimeout(()=>{
    console.log(p2);
}, 2000)




// Success rejection success cycle

// const p1 = givePizza();
// const p2 = p1.then((res)=>{
//     console.log(res);
//     return giveBurger();
// })
// p2.catch((res)=> console.log(res));

// setTimeout(()=>{
//     console.log(p1)
// },2000);

// // attaching a timer so that it doesn't execute before this line
// setTimeout(()=>{
//     console.log(p2);
// },3000);