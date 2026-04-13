# Debouncing - Performance Optimization Technique

- It is a performance optimization technique which ensures that a function executes after 
  a specific period of delay once the event has stopped triggering. This technqiue helps 
  to prevent unncessary api calls, improving data fetching from the api. 
  
# 1st Approach of attaching the event listener is written on app.html 
# Using the Modern JavaScript way
- In this appraoch, we defined everything inside the script file, making our html file clean

# 2nd Approach of attaching the event listener is written on app2.html
# Using HTML way
- In this approach, we attach the even listener in the HTML file

Q. How the entire flow of debouncing works?

- When a index.html file is loaded and executed in the browser the js file is also 
  loaded and executed and the entire code runs and a function is assigned to:

  - searchWithDebounce()

- So, the confusion of how the code works when onkeyup event is triggered from the above
  explanation. 

- By the time the onkeyup event is triggered the entire file is loaded ande executed and
  a function is assigned to searchWithDebounce()

  Q. How the code works?

1. First we are writing a function expression: search(e) where an event obj is passed

2. Now, debouncing is a programming technique where a function executes after a specific
   period of activity. Therefore, we are going to introduce a function debounce(search, 1000)

3. This debounce(search, 1000) returns a function which is assigned back to searchWithDebounce()

    function definition of debounce

    function debounce (fn, delay) {

        // introduce a timer varibale to make sure that the function executes after a delay as we want

        let timerId;

        // event obj is automatically passed to ...args, it takes all the rest args and wrap it in
        // insde the array. It is known as rest operator
        return function(...args){

            // clear all the previous timer
            clearTimeout(timerId);

            // set a new timer
            timerId = setTimeout(()=>{

                // array is spreaded back, search is called
                fn(...args)

            }, delay)  
        }
    }

- Explanation Frame By Frame:

# Note: 
Here is the "frame-by-frame" breakdown of that specific "Apple" scenario:

1. User types 'A': onkeyup fires 
 Previous timer (none) is cleared 
 Timer 1 (1s) starts.

2. User types 'p' (at 0.2s): onkeyup fires 
 Timer 1 is killed 
 Timer 2 (1s) starts.

3. User types 'p' (at 0.4s): onkeyup fires 
 Timer 2 is killed 
 Timer 3 (1s) starts.

4. User types 'l' (at 0.6s): onkeyup fires 
 Timer 3 is killed 
 Timer 4 (1s) starts.

5. User types 'e' (at 0.8s): onkeyup fires 
 Timer 4 is killed 
 Timer 5 (1s) starts.

The Pause: The user stops typing.
The Execution: Timer 5 finally reaches the 1s mark without being killed. It calls search(event).
The Result: console.log prints "Fetching Data for: Apple" once

# Note:
One Critical Detail
Notice that even though the user typed 5 letters, the API call (search function) only happened one time. Without debouncing, your code would have tried to fetch data for "A", then "Ap", then "App", then "Appl", and finally "Apple"—wasting server resources and potentially showing flickering results to the user.

# For example, 
- When user types A no pause, R no pause, Y no pause, A no pause, N, no pause
- Finally, when user user presses N there is a pause and user is fetched

server
------------------------------------------
        |
  | | | |
| | | | |
| | | | |
-----------------------------------------
client 

=================================================================================================

# Throttling

It is performance optimization technique which ensures that a function executes only once after a 
specific time interval. 

The Comparison
1. Debouncing: "Wait until I've stopped typing for 1 second, then run." [1]
2. Throttling: "No matter how fast I type, only run once every 1 second." [2]

# Flow 
- The flow in which the code is execute is similar to debouncing. However, there is middleman
  in our code, which prevents the user to send the message unless Enter is hit. 

- This middleware kind of thing act as a gatekeeper and run after the event is fired each time.

// getting input box
const input = document.getElementById("chatInput");

// Attach the event listener
input.addEventListener("keydown", (event) => {
    // Check if the key pressed is 'Enter'
    if (event.key === "Enter") {
        const message = event.target.value;
        
        if(message.trim() !== "") {
            sendChatMessageWithSlowMode(message);
            event.target.value = ""; // Clear input after sending
        }
    }
});

# console.log(`Slow mode active. Please wait ${((delay - (now - lastCall)) / 1000).toFixed(1)}s`);

- What does .toFixed(1) does?
= It rounds the value, to 1 and its return type is string

- This line of code is also confusing but here we are subtracting the delay from the now-lastCall
  so that slow mode logic is kept

- Divding the result by 1000 to get seconds and .toFixed(1) only gives first digit in seconds



