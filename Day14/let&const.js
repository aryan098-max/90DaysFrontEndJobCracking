/*
    Q. Interview question: Are let and const variable hoisted at top?

    Yes, let and const variable are hoisted at top but they are assigned memory in a separate memory object
    called script. You can’t access a variable declared with let and const before it is initialized a value
    because they are in Temporal Dead Zone. They are also assigned a special placeholder called undefined.

    1. Temporal Dead Zone: It is a time period in which variable declared with let and const are not available
       until its initalization.

       You can't access let and const before its initalziation (assinged a value). It throws an uncauught reference
       error.

    2. let and const are not attached to window object because they are allocated memory in a different memory
       space know as Script (obj).

       You can't accesss a variable when it is inside the TDZ.

       window.a gives undefined

    Q. How to avoid Temporal Dead Zone?
    We can avoid, Temporal Dead Zone by declaring and defining variable at the top of the scope.
    The TDZ is shrinked to zero if let and const are declared and defined at the top of scope.

*/

// It is inside a TDZ (Temporal Dead Zone), it can be only accessed after it is assinged a value
// It is allocated memory inside a diff obj or space known as Script
let a = 10;
console.log(a);

console.log(b);
let b = 20;