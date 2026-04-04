/**
    1. What is a closure?
    A function bundled along with its lexical scope is called closure. In other words function 
    along with its lexical env (outer env). 

    When the inner function is returned a closure is returned. It has access to its lexical scope
    (outer function). Closure allows to access an iner function variables and functions of otuer 
    function.

    Closure always returns lexical scope and reference to the variables not the value
    

    # Note: 
    In JavaScript lexical scoping, the "identity" of a closure is always tied to the parent function 
    that created the environment, not the child function that is currently consuming it.

    Therefore, in the dev tools we see parent function forming closure with the variable name

    # Analogy: 
    No matter who is using Javascript programmers, the name of the writer (founder is always mentioned)


    Important Uses of closures:
    1. Module Design Pattern
    2. Currying
    3. Functions like once
    4. Memoize
    5. Maintaining state in async world
    6. Iterators & many mores

 */

function A(){

    let a = 20;

    // closure (A) a:20 is returned
    function B(){
        console.log(a);
    }

    return B;
}

const result = A();
result();


// In this example, z forms the closure with scope of y and x - in this manner
// a and b are not garbage collected they are saved inside the memory and only
// z can access them.

function x(){
    let a = 20;
    function y(){
        let b = 30;
        return function z(){
            console.log(a, b);
        }
    }
    return y;
}

const closure = x()();
closure();