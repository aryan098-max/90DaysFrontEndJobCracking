/*
    1. Debouncing: It is a performance optimization technique technique which ensures that a function executes 
       after a specific period of delay i.e; once the event has stopped triggering. This technique prevents unneces
       -sary api calls, improving data fetching from the api.

*/

function debounce(fn, delay){

    // used to clear out the previous timers
    let timerId;

    return function (...args){

        // clearout previous timers
        clearTimeout(timerId);

        timerId = setTimeout(()=>{
         // calling search function
            fn(...args);

        }, delay)
    }

}

async function search(e){

    const query = e.target.value;

    if(query !== " "){
        // perform the search operation
        console.log("Datat Fetching for the", query);
    }

    const response = await fetch(`https://github.com/users/${query}`);
    const data = await response;
    console.log(data);
}


const searchWithDebounce = debounce(search, 1000)

let searchBar = document.getElementById('myInput');
searchBar.addEventListener('keyup', searchWithDebounce)