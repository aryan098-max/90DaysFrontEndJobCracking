/*

    Hoisting
    So, when a js file executes the variable declared with var and function definition is saved in the memory
    during memroy alloction phase. Afterwards, during the code exeuction phase we are able to access these 
    variables and function before their declaration and definiton respectively.

    Hoisting is a concept of JS where variables and functions are moved to the top of the scope. It means that
    the varibales and functions are allocated memory even before a single line of code is executed.

    Therefore, we can access variable declared with var keyword because it is allocated a special value which 
    is known as undefined. It is a placeholder for the variable declared with var keyword.

 */


console.log(a);
var a = 10;
console.log(a);

A();

function A(){
    console.log("Hello Aryan");
}

