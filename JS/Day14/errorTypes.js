/*
    - Types of Error in JavaScript

    1. Uncaught Reference Error - a not defined (variable)
    2. Uncaught Reference Error - can't access a before initialization
    3. Uncaught Syntax Error -  (Let & Const): a variable has already been declared
    4. Uncaught Syntax Error - missing initializer in const declaration
    5. Uncaught Type Error Assignment to a constant variable: You will get this error 
       if you try to reassign a value to a variable already declared with const. 


    # Note: Not even a single line of code is executed in syntax error

    # Reference Error: code runs but the first line itself shouldn't cause the error

    # If a variable is declared and defined using const variable, it can't be reassigned because it
      gives an type error

      variables declared with const variable are type const

*/


// Syntax error, not even a single line of code is executed

console.log("Hello World");

// re-assigning a value is possible with let but entirely re-declarign is not allowed
let b = 20;

// causes syntax error
// let b = 30;

// allowed
let a; 
a = 20;

// syntax error const second line assignment not allowed
// Uncaught SyntaxError: Missing initializer in const declaration
// const c;
// c = 20;


