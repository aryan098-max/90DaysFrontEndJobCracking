function debounce(fn, delay){
    let timerId;

    return function (...args){

        // clear all timers
        clearTimeout(timerId);

        timerId = setTimeout(()=>{
            fn(...args);
        },delay) 
    }
}

const search = async (e) =>{
    let query = e.target.value;

    if(query.trim() !== ""){

        const response = await fetch(`https://api.github.com/users/${query}`);
        const data = await response.json();
        console.log(`fetching data for ${query}`);
        console.log(data);
    }
}

const searchWithDebounce = debounce(search, 1000);

// DOM & Events
const input = document.getElementById("myInput");

input.addEventListener("keydown", searchWithDebounce);