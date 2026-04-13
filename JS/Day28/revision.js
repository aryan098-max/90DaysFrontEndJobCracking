/*
    Closures: A function bundled along with its lexical scope is known as closures, which means
    that a closure is a function bundled along with its lexical environment, which is its outerscope

    Due to this feature, function can access variables and function even after the outer function has
    completed its execution.

    Real World Examples

    1. Encapsulation
    2. Event Handlers

**/


// closures with event handler
const myBtn = document.getElementById('mybtn');

function attachCounter() {
    let counter = 0; // stays in closure

    // increaseCount has access to counter even though attachCounter has finished its execution
    myBtn.addEventListener('click', function increaseCount() {
        counter++;
        console.log(counter);
    });
}

attachCounter();