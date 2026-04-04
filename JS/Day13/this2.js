"use strict"

// In strict mode if a function is called without any reference, the value is undefined

const user = {
    fName:"Aryan"
}

function a(){
    console.log(this); // value is undefined
}

// without window reference
a(); // undefined

// Here, I am providing a window reference when calling the function, therefore, it is window
// Provide a refernce
window.a(); 