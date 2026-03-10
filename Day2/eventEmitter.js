const express = require('express');
const app = express();
const EventEmitter = require('events');
const emitter = new EventEmitter();

// global variable count
let count = 0;

// Listening to the event: "Api Called", The Listener (The "Ear")
// We can receive 'data' as an argument!
emitter.on("Api Called", function(currentCount){
    console.log(`Api was called ${currentCount} timne`)
})

// Apic all
app.get("/", (req,res)=>{

    count ++;
    emitter.emit("Api Called", count);
    res.send("Api called");

})

app.listen(8000, ()=>{
    console.log("The port is running at 8000");
})