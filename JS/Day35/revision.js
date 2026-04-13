/*
    1. this inside global space, this point to window object 
    2. this inside a normal function, is referncing to window object in non-strit mode
    3. In strict, mode it is undefined
    4. this keyword inside the obj points to obj used to access the properties of the obj
    5. this inside the constructor function is created and assinged to an empty obj when
        a constructor function is called with new keyword, 
    6. call, apply, and bind methods are used to control the value of this inside a function
    7. Inside DOM the value of this is the element itself.

    - Most important
    8. this with arrow function, arrow functions doesn't have a value of this it takes the 
       value of this from its lexical env

*/