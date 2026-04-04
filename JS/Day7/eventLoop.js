/*
    1. Event Loop: So, bascically, event loop is a monitor which monitors the 
       call stack, callback queue & micro task queue repeatdley.

     - Whenever callstack is empty, it takes the callback function of from callback 
     queue or micro task queue and pushes it inside the callstack.

    2. All the callback functions of event listeners with event, fetch, timers
       are stored inside the browser. As they are the features of browser (web apis)

       1. fetch() returns a pending promise - handler inside the then() registered
          inside the browser and waits for the promise to be resolved. 

          After the promise is resolved, it comes inside the microtask queue and
          finally inside the callstack and executed.

        2. Dom apis - event listeners - For, handlers of evenlisteners the same
           process is repeated the handler is stored inside the browser and after
           a event occurs (button click)

           The callback function is passed to the callback queue and pushed inside
           the callstack and executed

*/