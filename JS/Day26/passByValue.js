/*
    1. Primitive Data Types follow pass by value, each time a new memory is allocated when a variable 
       is created using pass by value


*/

// we are copying the value to a variable a
let a  = 10;

// copying the value, c is 11 but a is still 10 because it is pass by value
// c doesn't reference a it just copying the value
let c = a;
c = c + 1;
