/*
    Q. How closure is working in this code?
    - function debounce(fn, delay){}, we have define a let timerId variable oustide the
      scope of return function (){}

    - Therefore, when this function is returned a closure is formed with this variable, which
      means we can access this even after the function has returned 

    - This is the power of closure, whenever the value of timerId is changed a live connection
      is created with this variable because this innerfunction() has access to its lexical scope

    - Whenever, a user types a key and let go for some ms searchWithDebounce() runs, for each 
      word same function runs and for each word the timerId changes because its in outer scope
      and due to closure.

*/

function debounce(fn, delay){

    let timerId;   

    // args now contains [event] because you passed it in HTML
    return function (...args){ // all the args are inside an array

       clearTimeout(timerId);
       timerId = setTimeout(()=>{

            fn(...args); // Spreading the array back into the event object argument

        }, delay) 
    }
}

async function search(e){

    // e is the event object. e.target is the <input> element.
    const query = e.target.value;

    // Making an api call
    const response = await fetch(`https://api.github.com/users/${query}`);
    const data = await response.json();
    console.log(data);

    // Making an api 
    if(query.trim() !== ""){
        console.log(`Fetching Data... for ${query}`)
    }
}

// searchWithDebounce is assigned once when the script loads
const searchWithDebounce = debounce(search, 1000);

// accessing the input using getElementById() method
document.getElementById("myInput").addEventListener("keyup", searchWithDebounce);
