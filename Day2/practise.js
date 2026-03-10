const { emit } = require("node:cluster");

class MyEventEmitter{

    constructor(){

        // assigning an empty obj
        this._event_listeners = {};
    }

    on (event, listener){

        if(!this._event_listeners[event]){
            this._event_listeners[event] = [];
        }

        this._event_listeners[event].push(listener);
    }

    emit(event, ...args){

        if(!this._event_listeners[event]){
            return false;
        }

        const listeners = this._event_listeners[event];
        listeners.forEach((listener)=> listener(...args));

    }

    off(event, listener){

        const index = this._event_listeners[event].indexOf(listener);

        // index not found
        if(index < 0){
            return false;
        }

        // splicing that listener for the upcoming users
        this._event_listeners[event].splice(index, 1);
    }

    once(event, listener){

        // Introducing a wrapper function which self destructs the sendWhatsApp listener
        const wrapperFun = function(...args){

            // calling the sendWhatsApp 
            listener(...args);

            // unregistering sendWhatsApp
            this.off(event, wrapperFun);
        }

        // registering sendWhatsApp disguised inside the wrapperFun
        this.on(event, wrapperFun);
    }
}

// MyEventEmitter obj
const emitter = new MyEventEmitter();

const sendEmail = function(username){console.log('Sending Email to', username)};

// register a listener for an event
emitter.on("user:signup", function(){console.log('User Signed Up')});
emitter.on("user:signup", sendEmail);
emitter.on("user:signup", function(username){console.log('Sending WhatsApp', username)});

emitter.on("user:logout",function(username){console.log(username,'has logged out')});

// Now, we are going to emit all the registered events
emitter.emit("user:signup", "Aryan01");
emitter.emit("user:logout", "Aryan01");

// make sure that one of the listener is not running
// emitter.off("user:signup", sendEmail);

// we will be able clearly observe that it is not calling sendEmail
emitter.emit("user:signup", "Aryan02");

// implementation of once
emitter.once("user:singup", )



