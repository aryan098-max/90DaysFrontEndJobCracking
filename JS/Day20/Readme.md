  1. Event Bubbling and Capturing (tricking) are concepts of event propagation.

    Events by default propagates from bottom to top; however, we can control them using
    a third variable, useCapture - which is a boolean value
    
    doument.querySelector('#grandparent').addEventListener('click', handler, true/false)

    Now, this true is for - 1. Capturing, false is for - 2. Bubbling (default)

    1. Event Bubbling : It happens from bottom to top and the value for the third arg is false

    2. Event Capturing : It happens from top to bottom and the value for the third arg is true


    

    