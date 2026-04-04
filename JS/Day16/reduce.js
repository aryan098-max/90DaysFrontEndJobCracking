/*
    1. reduce - It is method which is used to reduce the values inside an array to a single value.

    - reduce arg takes two arguments, the first arg is the callback function and second is the initial
    value of the accumulator.

*/

const arr = [1,2,3,4,5];
let sum = 0;

// Initially, prev is zero
// acc is acting like a accumulator
const sumOfArary = arr.reduce((acc, curr)=>{

    acc = acc + curr;

    // so, this acc is returned back to (acc, curr)
    // acc is replaced each time with this value;
    return acc;
})

console.log(sumOfArary);


// We can also introduce sum variable and write the same function
const totalSum = arr.reduce((acc, curr)=>{

    let sum = 0;

    sum = acc + curr;

    // sum goes back to arr until the length of the array is exhausted
    return sum;
})

console.log(totalSum);


// We can initially set the value of prev
const greaterElement = arr.reduce((prev, curr)=>{

    if(curr > prev){
        // prev is replaced with curr (prev, curr)
        return curr;
    } else{
        return prev;
    }


}, 0) // prev will be zero now

console.log(greaterElement);