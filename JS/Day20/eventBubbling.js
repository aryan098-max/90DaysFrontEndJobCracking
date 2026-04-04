/*
    1. Event Bubbling and Capturing (tricking) are concepts of event propagation.

    Events by default propagates from bottom to top; however, we can control them using
    a third variable, useCapture - which is a boolean value
    
    doument.querySelector('#grandparent').addEventListener('click', handler, true/false)

    Now, this true is for - 1. Capturing, false is for - 2. Bubbling (default)

    1. Event Bubbling : It happens from bottom to top and the value for the third arg is false

*/

    // So, here first child is called, parent is called, and finally grandparent is called

    document.querySelector('#grandparent').
    addEventListener('click', function(){
        console.log('Grandparent is clicked')
    }, false)

    document.querySelector('#parent').
    addEventListener('click', function(){
        console.log('Parent is clicked')
    }, false)

    document.querySelector('#child').
    addEventListener('click', function(){
        console.log('Child is clicked')
    }, false)