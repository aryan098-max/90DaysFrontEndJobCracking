/*
    1. Shallow Copy - A shallow copy is a copy of an object where only the top-level properties are duplicated,
     while nested objects are still copied by reference.

    2. Deep Copy - It is a programming technique in JS where all the properties are recursively copied into a new
       obj. They don't share the same memory reference. 

      - We can create a deep copy using methods like JSON.parse(JSON.stringify()), however, while using this method
        functions are lost, and the properties are converted into string
*/

const _ = require('lodash');


// Shallow Copy

let developer1 = {
    firstName: "Aryan",
    age:24,
    skills:{language:"JavaScript", Tools:["VS Code", "Git"]}
}

// creates a shallow copy, where top level properties are copied 
// let developer2 = Object.assign({}, developer1)

// using spread operator
let developer2 = {...developer1};

// Creating deep copy, where all the properties, from top level, to nested are copied recursively
let developer3 = _.cloneDeep(developer1);
developer3.skills.language = "TypeScript";

console.log(developer1);
console.log(developer3);



