/**
  Events are signal fired by the browser or the system, which invokes handler function 
  registered to handle those events.

There are different types of event

1. User Interaction Events
These are triggered directly by a person interacting with the hardware.
Mouse Events: click, dblclick, mousedown, mouseup, mousemove, mouseover, and mouseout.
Keyboard Events: keydown (pressed), keyup (released), and the legacy keypress.
Touch & Pointer Events: touchstart, touchmove, and touchend for mobile devices, or pointerdown as a hardware-agnostic alternative. 


2. Form & Input Events
Fired when a user interacts with form elements like <input>, <select>, or <button>. 
Submit: Triggered when a form is sent.
Change: Fired when an input's value is finalized (e.g., clicking away from a field).
Input: Fired immediately every time a value changes (e.g., as you type).
Focus & Blur: Triggered when an element gains or loses "focus" (active state). 


3. Window & Document Events
Fired by the browser itself to report changes in the environment. 
Resource Loading: load (page/resource fully loaded), DOMContentLoaded (HTML parsed, but images/styles may still be loading), and error.
Layout Changes: resize (window size changed) and scroll.
Navigation: beforeunload (before a user leaves a page) and hashchange. 

4. Media & Advanced Events
Media Events: play, pause, volumechange, and ended for audio and video.
Clipboard Events: copy, cut, and paste.
Drag & Drop: dragstart, dragover, and drop.
Custom Events: Events created by you (the developer) to handle app-specific logic using the CustomEvent constructor. 


5. Asynchronous & System Events
Network: online and offline signals.
Animations: animationstart and transitionend to detect when CSS animations/transitions finish.
Promises: unhandledrejection if a JavaScript promise fails without a catch. 

- Some of the most popular events are:

1. The "Big Three" (Most Common)
click: Used for buttons, links, and almost any interactive element.
change: Used for checkboxes, radio buttons, and select dropdowns to capture a new selection.
input: Used for text fields and textareas. In React, onChange actually behaves like the native input event, firing on every keystroke.

2. Form & Focus Events
submit: Vital for handling form validation and preventing page reloads via event.preventDefault().
focus: Triggered when a user clicks into an input (used for showing validation hints or highlighting).
blur: Triggered when a user clicks out of an input (used for "on-the-fly" validation).

3. Layout & Navigation
scroll: Used for "sticky" headers, infinite scrolling, or "back to top" buttons.
resize: Used to adjust UI elements or charts when the browser window dimensions change.
DOMContentLoaded: Crucial in vanilla JS to ensure the HTML is ready before your code tries to find elements (though less common in React as the library handles this).

4. Advanced Interaction
keydown: Frequently used for accessibility (e.g., closing a modal with the Escape key) or submitting a chat with Enter.
mouseenter / mouseleave: Used for tooltips or complex hover effects where you need to track exactly when the cursor enters an element's boundary.

5. Media & Network
load / error: Essential for handling image loading states or catching broken image links.

 */