// Deobounding is a performance optimization techqniquem which ensures that a function executes after a specific
// period of delay. This technique prevents unncessary api calls, improving data fetching from the api

function debounce(fn, delay){

    let timerId;

    return function(...args){

        // clearout the previous timers
        clearTimeout(timerId);

        // A new timerId is assigned each time
        timerId = setTimeout(()=>{

            // calling search function
            fn(...args);

        }, delay)
    }
}

async function search(e){

    let query = e.target.value;

    if(query.trim() !== ""){
        
        console.log(`Fetching data for the ${query}`);
    }

    const response = await fetch(`https://api.github.com/users/${query}`);
    const data = await response.json();
    console.log(data);
}

const searchWithDebounce = debounce(search, 1000);

const inputBox = document.getElementById('myInput');
inputBox.addEventListener("keyup", searchWithDebounce)