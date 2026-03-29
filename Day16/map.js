/*
    1. map method: 

       It is used to transform an array, it returns a new array from an existing array. It maps each element 
       from an array and gives us a new array. Let's suppose that doubling or trippling an array.

       map method accepts another function as an arg and run that function for each and every element.

*/

const arr = [1,2,3,4,5];

// returns a new array
const newArr = arr.map((ele)=>{
    return ele * ele
})

console.log(newArr);