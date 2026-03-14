/*
    1. In normal functions, the value of this depends where the function is invoked: this is known
       as Dynamic Binding

    2. The 4 Main Rules of "How it's Invoked":

        a. Simple Function Call:
        If you just call myFunc(), this points to the Global Object (window in browsers).
        (Note: In Strict Mode, it will be undefined).

        b. Method Call:
        If you call it as an object property (e.g., user.greet()), this points to the object before the dot (user).

        c. Constructor Call:
        If you use the new keyword (e.g., new User()), this points to a brand-new, empty object that was just created.

        d. Explicit Binding:
        If you use call, apply, or bind, you manually tell JavaScript exactly what this should be.

    d. Epxlicity Bindig 
    - With the help of bind method we are able to preset the value of this inside a new returned function.

    - const newFun = existingFun.bind(obj).
    - newFun function => this now points to the obj.

*/


const user = {
    firstName:"Aryan"
}

function printUserInfo(){
    console.log(this.firstName);
}

// preset the value of this 
const displayName = printUserInfo.bind(user);
displayName();