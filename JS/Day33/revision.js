/*
    Protoype Inheritance Model:
    Unlike other programming languages such as C++ and Java, which employs class based inheritance model. JS uses
    protoype based inhertiance model, in which an obj can access the properties and methods of another obj using
    a chain like strcture known as prototype chaining.

    Let's suppose that I create an array using array construcutr

    let arr1 = new Array(1,2,3
    arr1 is poiting to another obj - Array.prototype, - all the methods and properities which is inherited
    by each array object

    Array.prototype - It is a blueprint for creating objects inside the JS



*/

let arr1 = new Array(1,2,3);
console.log(arr1.length);