/*

    1. Currying using closures
    In currying using closures the value of the variable inside the function is prefixed with x

*/

function multiply (x){

    // Even after the function is returned the value of x is retained because of closrues
    return function(y){
        // The value of x is preset
        console.log(x * y);
    }


}

const multiplyByTwo = multiply(2);

// so, the first variable is prefixed with the help of closures
multiplyByTwo(3);