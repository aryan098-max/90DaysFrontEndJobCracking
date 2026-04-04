class MyEventEmitter{

    constructor(){
        this.__event__listeners = {}
    }

    // Registering listeners
    on(event, listener){    
        
        if(!this.__event__listeners[event]){
            this.__event__listeners[event] = [];
        }

        this.__event__listeners[event].push(listener);
        return true;
    }

    // producing a noise, triggering listeners
    emit(event, ...args){

        if(!this.__event__listeners[event]){
            return false;
        }

        // listener is an array
        const listeners = this.__event__listeners[event];
        listeners.forEach((listener)=> listener(...args));
    }

    off(event, listener){

        // finding the index of listener
        const index = this.__event__listeners[event].indexOf(listener);
 
        // index = -1 return false, no need to check for the the event exists or not
        if(index < 0){
            return false;
        }   

        // other wise splice it
        this.__event__listeners[event].splice(index,1);
    }

    once(event, listener){

        const wrapperFn = (...args) =>{
            listener(...args);
            this.off(event, wrapperFn);
        }

        // registering wrapperFn to this._event_listeners array
        this.on(event, wrapperFn);
        return true;
    }
}

const emitter = new MyEventEmitter();

// Diff approach of passing the listener || callback function
const sendWhatsApp = (username) => console.log('Send WhatsApp to', username);

// on: registering a listener
emitter.on('user:signup', ()=> console.log('User signedup'));
emitter.on('user:signup', (username)=> console.log('Sending Email to', username));
// emitter.on('user:signup', sendWhatsApp);

// ================================================= once =========================================

emitter.once('user:signup', sendWhatsApp);

// ================================================================================================

// registering 'user:logout' event
emitter.on('user:logout', (username)=> console.log('logout', username));


// emit: emitting the emmiter
emitter.emit('user:signup', 'Aryan');

// calling user:logout for 'Aryan' only
emitter.emit('user:logout', 'Aryan');

// For another user
emitter.emit('user:signup', 'Aryan02');

// ============================================== Off ==============================================
// unregistering an event listener
// emitter.off('user:signup', sendWhatsApp);

// off: event emitter after unregistering an event listener
// emitter.emit('user:signup', 'Daemon');
// ===================================================================================================
