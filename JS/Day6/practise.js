// closures with event handler
const myBtn = document.getElementById('mybtn');

function attachCouner(){
    let count = 0;
    myBtn.addEventListener('click', function increaseCount(){

        count ++;
        console.log(count);
    })
}

attachCouner();