# Note: 
In HTML, CSS, & JS we can HTML is the button is the emitter we can use button 
to produce the noise. 

However, we can't do the same in the Node.js, we have to use api for that. 

# Event Emitter
- It is a class which is returned by the 'events' module and we make a obj
  using that class

  Demo: 
  const EventEmitter = require('events');
  const emitter = new EventEmitter();

- This emitter obj has different methods: 

    1. emitter.emit('Api call');
    2. emitter.on('Api call', function()=>{
        console.log('Api called')
    })

- There are other methods also but two main are the above methods

======================================================================================

# Event Emitter - Advance
In programming, an Event Emitter is a design pattern (specifically the Publisher-Subscriber pattern) that allows different parts of an application to communicate without being tightly coupled.

# Difference between Events and Event Emitter

While browser events are often triggered by external interactions like mouse clicks, an Event Emitter allows you to define and trigger your own custom internal signals.

# Key Concepts

1. Emitter: The object that "screams" or signals that something has happened.

2. Event: A named signal (usually a string like 'user-logged-in' or 'data-received').

3. Listener/Handler: A function that "listens" for a specific event and executes code when it occurs. 

# Core Methods (Node.js Example)
In environments like Node.js, the EventEmitter class provides several built-in methods: 

1. on(eventName, listener): Registers a function to be called every time the event is triggered.
2. emit(eventName, ...args): Triggers the event and calls all registered listeners synchronously.
3. once(eventName, listener): Similar to on, but the listener is removed automatically after it runs once.
4. off() / removeListener(): Unregisters a specific listener to prevent memory leaks.

# Real-World Use Cases

1. Streams: Node.js streams use event emitters to signal when data is available ('data') or when a file has finished reading ('end').

2. Chat Applications: A server can emit a 'newMessage' event to all connected clients when one person sends a  message.

3. State Management: Tools like Redux use a similar pattern to notify UI components when the application state changes. 
