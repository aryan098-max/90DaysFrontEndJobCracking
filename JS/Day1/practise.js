// Helper Function
function throttle(fn, delay){

    // stores the value of last message
    let lastCall = 0;

    return function (...args){

        // get the current time
        const now = Date.now();

        // wait time message
        console.log(`Slow mode active. Please wait ${((delay - (now - lastCall)) / 1000).toFixed(1)}s`);

        if(now-lastCall < delay){
            return;
        }
        lastCall = now;
        return fn(...args);
    }
}

// core function
const sendChatMessage = (message) =>{

    console.log(message);
}


// Calling with throttled
const sendChatMessageWithSlowMode = throttle(sendChatMessage, 30000);


// DOM Events and Event Listeners
const input = document.getElementById("chatInput");

input.addEventListener("keydown", (event)=>{

    if(event.key === "Enter"){

        let message = event.target.value;

        if(message.trim() !== ""){
            sendChatMessageWithSlowMode(message);
            event.target.value = "";
        }
    }
})
