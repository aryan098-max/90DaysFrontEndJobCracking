 1. async is a keyword in js which is used to create an asynchronus function which always returns a promise.
       
2. await is a keyword we used inside the async function, we cna't use await outside an async function. 
       await pauses the code within the async function until the promise is resolved. 

    Q. Why do we need an async function? 
    -> We need an async function to make a Api call. The main advantage of using async function is that it doesn't
       block the main thread.

Note: Similar, to .then(callback) async also creates a promise and if the function executes properly it returns 
      whatever is being returned from the function.

      However, if a async function is returning a promise the async function adopts the state and returned value
      of the promise being returned from the definition of the async function. It is known as flatenning out the
      promise.