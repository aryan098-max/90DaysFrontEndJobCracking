function throttle(fn, delay){

    // tracks when the function last called to check whether to allow or block the next call.
    let lastCall = 0;

    return function (...args){
        // gives the current time stamp
        let now = Date.now();

        if(now - lastCall < delay){

            console.log(`Please wait slow mode is activated ${((delay - (now-lastCall))/1000).toFixed(1)}s`);
            return;
        }

        // update lastcall with now
        lastCall = now;

        // calling the function
        fn(...args);
    }
}

function sendChatMessage(message){

    console.log(message);
}


const sendChatMessageWithSlowMode = throttle(sendChatMessage, 5000)


const inputBox = document.getElementById('myInput');

// attaching an event listener
inputBox.addEventListener("keydown",(event)=>{

    // Check if the key pressed is 'Enter'
    if(event.key === "Enter"){

        let message = event.target.value;

        if(message.trim() !== ""){

            sendChatMessageWithSlowMode(message);
            // clear input after sending the message
            event.target.value = ""
        }
    }

} )