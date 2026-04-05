/*
    - It is the process of converting one data into another data type implicitly
      by JavaScript

*/

// "In this code, JavaScript performs Implicit Type Coercion. When the + operator is used with
//  a String and a Number, JavaScript gives priority to a string concatenation. It automatically 
// converts the number 2 into a string "2" and joins them together, resulting in the string "12"."

let add = 1 + "2";
console.log(add);

// f you had 1 + 2 + "3", the result would be "33". Why? Because JS evaluates from left to right:
// 1 + 2 = 3 (Math)
let c = 2 + 3 + "3" // c = 53, because the expression is evaluated from left to right