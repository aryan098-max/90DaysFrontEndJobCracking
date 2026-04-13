/*
    1. Prototype Based Inheritance Model
    - Unlike other programming languages such as C++, java which employs class based inhertiance
      model JS uses prorotype based inheritance model. It means that an obj can access the properties
      and methods of other objects through a chain like structure known as prototype chaining.

    - Every obj in JS has a hidden property called [[Prototype]] which points to the prototype of another
      obj

    - For example, 
            let arr = new Array()
            - Now, this arr - hidden property is set to an object called Array.prototype, from here it can
              access the methods and properties of another obj
    
    - Prorotype chaining: It is a mechanism of searching properties and methods through chain like strucutre
      which is known as protoype chaining. 

    -  So, whenever an obj is created and it is trying to access some properties it first looks whether it has
       the method and property it is trying to use, if it is not there it goes up to the prorotype chain and
       look for those methods and property

*/

// Protoype chaining

let object = {
    fname:"Aryan"
}

// First, this object looks for the property in here itself and goes up to the prototype chain
let object2 = {
    lname:"Gupta"
}

// setting the prototype of object2.__proto__ to object
object2.__proto__ = object;

// Now, it can access properties and method of object
console.log(object2.fname)