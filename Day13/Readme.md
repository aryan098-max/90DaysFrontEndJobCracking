// this in global space, // this inside a function, // this in strict mode, // this – depending on window, //call, apply, and bind methos, // this inside arrow function, // this inside nested arrow function, // this inside DOM
 
1. This inside Global Space
Inside global space the value of this is global object, which is window object in browser. 

2. This Inside a function (aka local scope)
The value of this inside a function depends how the function is invoked (run time binding). If a function is invoked inside the global scope this inside that function definition points to window object.
However, if we use call, apply, and bind to bind the function to an obj, this inside that function will point to that obj
# Note: It doesn’t depend where the function was invoked, it rather depends on how the function was invoked.
If a function is called using call, apply, & bind - binding it to an obj the this points to that obj

This substitution: 
It is concept where if a value of this is undefined or null, it is immediately assigned to window object. 
So, the value of this inside the non strict mode is initially undefined, but due to this substitution the value is immediately assigned to window object.
Even if try to assign it to forcefully using - b.call(null) - it will be reassigned to window object.

3. This Inside a strict mode 
1. strict mode: Inside strict mode, the value of this inside a function is undefined. Inside strict mode we have to provide reference while calling the object. 
2. Non-strict mode: If I don’t use strict mode the value of this is window object.
# Note: So, whenever, a value of this is undefined or null it is replaced with globalObject only in non strict mode.

4. This Inside an obj
# Note: If a function is made a part of the JS object, it is known as method.
This inside an obj points to the obj itself.

5. This in Call, apply, & bind - (this keyword)
These methods are used when we have to share methods between the objects. It is used to set the value of this between functions and objects.

6.  This Inside an arrow function 
# Note: Arrow functions doesn’t have their own this binding (it retains the value of this from the enclosing lexical context) from its lexical environment.
The value of this inside an arrow function is where it is lexically present. Arrow functions doesn’t have the concept of this. Therefore, the value of this depends on its lexical environment.

7. This keyword inside DOM
The value of this inside the DOM is that HTML element itself. It reference back to itself.
<!-- value of this = [object HTMLButtonElement] -->
<!-- The button itself is the value of this, <button> itself is this -->
<button onclick="alert(this)">Click Me DOM</button>
