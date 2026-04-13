/*
    1. var keyword: So, when a variable is declared with var keyword it is allocated memory inside the global 
       scope. Therefore, we can access it before, it is intialized any value.
*/

console.log(a); // undefined, assigned, undefined
var a  = 20;

// re-declare and re-assign the variables declared with var keyword
var a = 30;

