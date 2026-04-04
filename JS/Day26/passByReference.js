/*

    1. All the data types except primitive types follow pass by reference

        For example, 

            1. Arrays
            2. Objects
            3. Strings
            .........
    
    2. A new memory is not allocated in pass by reference, both the variables point to 
       same memory address.
*/


// Arrays also follow pass by reference
// c is stored 
let c = [1,2]

// d also points to the same memory address
// a new memory is not allocated
let d = c;

// Let's suppose that we push a value into the d array
d.push(3);

// Now, if we check d, we will be able to observe that c has increased in size
// Because they are referencing to the same memory address
console.log(c)
console.log(c.length)

// Re-assigning d to a brand new array
// Now, d will point to a new memory address because array are stored by reference 
// This new array is stored in a new memory address and we are assigning that address to d
// We are over-writing the entire value of d
d = [4,5,6];






