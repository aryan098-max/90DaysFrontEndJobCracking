/*
    1. Shadowing: 

    It is a situation in JS, where a variable declared and defined in the inner scope has same name as 
    the variable declared and defined in the outer scope. The inner variable shadows the outer variable, 
    meaning the inner variable takes precedence over a variable declared and defined in the outer scope. 
    This is known as shadowing. 



    2. However, illegal shadowing is not allowed. This happens usually if we try to shadow a variable using a var keyword. 
    For example, 
    let a = 20;
    {
        var a = 30; // this gives error
    }

    # Note: The above code is possible to write using functions - The variable declared inside a function using var keyword
      can't be access outside as it is block scope.

    2. Shadowing using var keyword

    - When a variable is shadowed using a var keyword it also overwrites the value as well because they
      both are declared and defined inside the global space.

    3. shadowing using let and const keyword

*/


var a = 10;
let b = 20;

{   
    // It shadows the variable outside the block and it also overwrites the value
    var a = 20;

    // It can't change the value of outer scope variable because it is not allocated memory
    // inside global space, b is allocated memory inside the block scope.
    let b = 30;
    console.log(a);
    console.log(b); // 20
}

console.log(b) // 10


// Not even a single line of code runs because of this illegal shadowing as it causes syntax error
// let x = 20;

// {
//     // It gives an error because var allocates memory in global space where x is also present. 
//     // It causes a syntax error as variable declared with let and const can't be re-declared.
//     // ncaught SyntaxError: Identifier 'x' has already been declared (at shadowing.js:50:9)
//     var x = 30;

// }