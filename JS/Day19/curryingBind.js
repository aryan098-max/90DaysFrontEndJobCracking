/*
    1. What is function currying?

    Currying is the process of taking a function with multiple arguments and turning it into a 
    sequence of functions with fewer arguments. Here, I transformed a two-argument multiply 
    function into a one-argument multiplyByTwo function.

    - We can perform function currying using two methods
        1. bind
        2. closures


    Q. Why we say fewer arguments?

    We say "fewer arguments" because each step in the sequence reduces the number of arguments 
    the next function needs to finish the job.

    Q. Why "Sequence"?
    It is a sequence because you are calling a chain of functions one after another.
    
    For example, function sum (x, y, z) three args
        sum(1) 
        returns Function B
        Function B(2) 
        returns Function C
        Function C(3) 
        returns Result


    Q. Interview "Pro" Observation

    If the interviewer asks: "What if I call multiplyByTwo(5, 10)?"
    Answer: It will still log 10. Why? Because x is already locked to 2, and y takes the next available 
    argument (5). The 10 is simply ignored.

*/


// It is a partial application what I am performing

const multiply = function (x, y){

    console.log( x * y);
}

// The first arg of multiplyByTwo function is fixed which is 2
const multiplyByTwo =  multiply.bind(this, 2);
multiplyByTwo(2); // ans: 4
multiplyByTwo(2, 4); // ans 4, because the first arg is locked

const multiplyByThree = multiply.bind(this) // I am passing no args
multiplyByThree(2,3) // asn: 6

