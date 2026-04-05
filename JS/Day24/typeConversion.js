/*
   - It is a process of converting one data type into another data type explicitly
     by the developer 

*/

// Give us a prompt to enter
// When we accept a input form the user it is a string
// let age = window.prompt("How old are you?");
// age = Number(age);

// age += 1;

// console.log(age, typeof age);



// The Interview Tip:
// If an interviewer asks why you convert it, tell them: "HTML input values are always strings. If I don't explicitly convert them using Number(), the + operator will perform String Concatenation instead of Addition due to implicit type coercion."
// Pro-Tip: You can also use e.target.valueAsNumber instead of e.target.value. This is a built-in property for type="number" inputs that automatically gives you the numeric value! 

const inputData = document.getElementById('ageInput')
inputData.addEventListener("keyup", function(e){
    // e.target.value - always returns a string, we can valueAsNumber as well or type conversion
    let age = e.target.value;
    age = Number(age);
    console.log(age + 1);
})


// Boolean Example, In an interview, you can explain this as 
// Here, also true is implicity converted into a number by JS and addition was performed
// false = 0, and true = 1
let d = true;
console.log(true + 1);