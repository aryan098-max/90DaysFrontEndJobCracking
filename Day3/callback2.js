/**
    1. Callback functions in Event Listener:

    Another important example of callback function is with event listeners. We pass a callback function
    inside the event listener and when the button is clicked that callback function will aumatically 
    be pushed inside the callstack and consol.log("Button is clicked ") will be executed.

    2. Closures with callback function - How many times button is clicked
    Closures are always formed with the parent scope. It is not formed with the function which is using
    the variable

    - x() is a function which has access of the closure count even after function has finished its execution

    Here, closures is formed with: Closure(attachEventListeners) 

    # Note: We can see that handler has closure scope attached to it. It has two scope attached to it
      first is the closure(its lexical scope) and global scope, lexical scope of its parent which is
      global


    3. Garbage Collection & removeEventListeners

    # Note: To, remove an event listener we must provide a name of the event listener, if we keep 
      it anonymous our code won't which anonympus function we are referring to
    
    Q. Why we need to remove event listeners? 
    - Event listeners are heavy (it takes memory - (forms closure)), even when the callstack is empty 
      still this program is not freeing the closure 
    
    - So, in this case we can't free up the memory, therefore, if a page has a lot of listeners and closures
      are forming, it can make our page slow

    - Closures consumes memory; therefore, a good practise is to remove the event listener, and after removing
      the event listener the closure is garbage collected

 */

function attachEventListeners(){
    
    let count = 0;
    const btn = document.getElementById('myButton');

      // attaching an event listener
      btn.addEventListener("click", function x(){
        console.log("Button is clicked", ++count);

        // remove event listener
        // if (count === 5) {
        //     console.log("Limit reached. Removing listener...");
        //     btn.removeEventListener("click", x); 
        // }
    })
}

attachEventListeners();
