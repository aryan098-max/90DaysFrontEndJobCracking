// Helper throttle function
function throttle(fn, delay){

    // lastCall helps us track when the function was last executed, so we can decide whether to allow 
    // the next call or block it.
    let lastCall = 0;

    return function(...args){

        const now = Date.now();

        // Initially, it becomes false
        if(now-lastCall < delay){
            console.log(`Slow mode active. Please wait ${((delay - (now - lastCall)) / 1000).toFixed(1)}s`);
            return;
        }
        // lastCall is updated with current timestamp value , only after it is greater than delay
         lastCall = now;

        // I am not returning a function, I am returning the result of a function call
        return fn(...args);
    }
}

// core function
const sendChatMessage = (message)=>{

    console.log(message);
}

// sending message with slow mode
const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 3000);

// getting input box
const input = document.getElementById("chatInput");

// Attach the event listener
input.addEventListener("keydown", (event) => {

    // Check if the key pressed is 'Enter'
    // sendChatMessageWtihSlowMode is only called if event.key === "Enter"

    if (event.key === "Enter") {
        const message = event.target.value;
        
        if(message.trim() !== "") {
            sendChatMessageWithSlowMode(message);
            event.target.value = ""; // Clear input after sending
        }
    }
});

// sendChatMessageWithSlowMode("Hello");
// sendChatMessageWithSlowMode("Hello sir");
