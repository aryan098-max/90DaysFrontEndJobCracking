/*
    1. Promise is an obj which represents eventual success or failure of an async operations.

    2. It has three states, Initially, it is pending which is transistioned to either fulfilled or rejected

    3. Promises also help us to resolve callback hell by creating a chain of promise known as promise 
    chaining. In promises, we don't pass a callback function during function call, instead we chain
    on the promise obj returned by the function

    4. It also resolved inversion of control because we don't pass a function during function invokation.
    In promises, we just chain on the promise obj returned by the function using then(), catch() and
    finally() handlers.

    5. Promise flattening: then() handler in promises returns a promise obj, therefore, if a promise obj
    is being returned from inside the then() handler, it adopts the state and the value of that obj, 
    which is known as promise flattening

    6. promise.all([p1, p2, p3]) - It is a method which is used when we have to make multiple api calls
       promise.allSettled([p1, p2, p3]) - It returns an array of objects, doesn't care if a promise is
       resolved or rejected
       promise.race([p1, p2, p3]) - returns the first promise which is either resolved or rejected
       promise.any([p1, p2, p3]) - waits for the first promise to be resolved and returns first promise
       which is resolved

       promise.any() if all three promise are rejected inside the .catch() we can store the aggregated
       result of rejecte promise

*/