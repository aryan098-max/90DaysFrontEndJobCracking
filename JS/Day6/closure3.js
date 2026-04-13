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