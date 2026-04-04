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