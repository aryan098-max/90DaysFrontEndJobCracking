# Debouncing - Performance Optimization Technique

- It is a programming technique which ensures that a function executes after a specific
  period of delay. This technqiue helps to prevent unncessary api calls, improving data 
  fetching from the api. It is a performance optimization Technique

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

        // introduce a timer varibale to make sure that the function executes after a delay as we ewant

        let timerId;

        // event obj is automatically passed to ...args, it taks all the rest args and wrap it in
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





