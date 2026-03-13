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

3.  Q. What is the difference between callback, promises and async & await

    1. Callback - Pass callback within the callback, callbackhell problem

    2. Promises - We use .then() handler to handle the promise obj. It is 
       a black box we have to use .then() handler to handle it.

       - Promises flattens the pyramid into chain, It has three states pending,
         fulfilled, rejected.
    
    3. async&await 
    
       Concept: It is "Syntactic Sugar" over Promises. It makes asynchronous code 
       look and behave like synchronous (line-by-line) code.
    
       we don't have to use the .then() handler. It unwraps the promise before we
       are able to use it.

       Error Handling: Instead of .catch(), you use standard try/catch blocks, just like normal code.
