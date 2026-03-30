1. singleton: Only one instance of obj is created creatd using class with some modification in the code. 

2. Ways of creating objects

    1. object literals: A way of creating object using object literal, it helps us to create a singleton 
        obj

    2. Object.create(): Object is a contructor function with .create() method also helps us to create a
        singleton obj, but should be only executed once. It is more prefered way of creating a singleton
        obj,because we can set obj1.__proto__ using this constructor function

3. Object methods: object.keys(user), object.keys(values)