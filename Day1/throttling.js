function throttle(fn, delay){

    let lastCall = 0;

    return function(...args){

        const now = Date.now();
        if(now-lastCall < delay){
            console.log(`Slow mode active. Please wait ${((delay - (now - lastCall)) / 1000).toFixed(1)}s`);
            return;
        }
         lastCall = now;
        return fn(...args);
    }
}

const sendChatMessage = (message)=>{

    console.log(message);
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 3000);

// getting input box
const input = document.getElementById("chatInput");

// Attach the event listener
input.addEventListener("keydown", (event) => {
    // Check if the key pressed is 'Enter'
    if (event.key === "Enter") {
        const message = event.target.value;
        
        if (message.trim() !== "") {
            sendChatMessageWithSlowMode(message);
            event.target.value = ""; // Clear input after sending
        }
    }
});

// sendChatMessageWithSlowMode("Hello");
// sendChatMessageWithSlowMode("Hello sir");
