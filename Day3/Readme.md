1. Callback function & Async Code (Callback function heart of the async code)

# Defintion: 
    A callback function is a function which is passed as an arg to a higher order function
    and this function is called later in the program.

    Note: Time, Tide & JavaScript wait for none.

# Callback function use in async function
    - Because JS is a single threaded language only one task executes inside the callstack at a time. 
      If we pass the callback function inside the async function. It will be executed later.

#   Q. Why callbacks are important? 
    1. One of the most important feature of callback function is Non-blokcking execution


================================================================================================================

2. Callback with Event Listener

# Note:
    Another important example of callback function is with event listeners. We pass a callback function
    inside the event listener and when the button is clicked that callback function will aumatically 
    be pushed inside the callstack and consol.log("Button is clicked ") will be executed.

# Closure with Callback function and Event Listener

  2. Closures with callback function - How many times button is clicked
     Closures are always formed with the parent scope. It is not formed with the function which is using
     the variable

    - x() is a function which has access of the closure count even after function has finished its execution

    Here, closures is formed with: Closure(attachEventListeners) 

    # Note: 
    We can see We can see that handler has closure scope attached to it. It has two scope attached to it
    first is the closure(its lexical scope) and global scope, lexical scope of its parent which is
    global


# Removing the event listener

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
