1. Promise: It is an obj which represents eventual success or failure of async 
    operations. It has three states 

        1. Pending, this transists to 
        2. Fulfilled
        3. Rejected

    Note: Once a state of a promise is changed it can't be changed into previous state. So, 
    promise is immutable. 

    # Note: resolve(1) it is asynchronus, it executes immediately unlike then(calllback())

Q. How Promises help us to avoid callback hell and Inversion of control?
    
    Promises avoid help us to avoid callback hell with the help of promise chaining. In promnise, 
    we don't pass a callback function instead we chain on the promise object being returned by
    the function call. 

    Promises make sure that our function executes because it will either resolve the promise or 
    reject the promise object.

 Q. Promises also resolve Inversion of control
    Promises also resolves Inversion of control because we are not passing a function within a function
    here we are returning a pormise obj which is either resolved or rejected.

  1. A interesting thing we can observe about promises is that each .then() handler returns a promise 
    and if a promise is being returned from inisde the .then() handler. It will adopt the state of that 
    returned promise.

    2. The state of the second promise p2 is fulfilled because .then() handler executes without any 
       interruption.

       Even if the p1 is rejected or accepted it doesn't matter p2 only cares whether .then() handler
       executed properly or not.

    # Note: If we are returning a promise within the .then() handler the promise created by .then()
     accepts the result returned by that promise



 