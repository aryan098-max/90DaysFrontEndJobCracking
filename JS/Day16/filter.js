/**
    1. filter - It is used to filter elements from an array. Each iteration evaluates to 
       either truthy or falsy values and based on the truthy values a new array is formed    

 */

const arr = [1,2,3,4,5];

// filter also returns a new array
const oddArray = arr.filter((ele) =>{

    if(ele % 2 === 0){ // evaluates to either true or false
        // truthy ele are added to the new oddArray
        return ele;
    }
})

console.log(oddArray);

const greaterThanFour = arr.filter((ele)=>{

    if(ele > 4) { // evaluates to either true or false
        // truthy values are added to new array
        return ele;
    }
})

console.log(greaterThanFour);