function add(array, element){

    // element is a primitive value 
    element = element + 1;

    // assigning a brand new array with 3 into it
    array.push(element);
}


const c = [1,2];
const element = 3;
add(c, element);

// We can see that element is passed by value and obj is passed by reference
console.log(c, element);