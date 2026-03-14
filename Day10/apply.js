const user = {
    firstName: "Aryan"
}

function printName(...greetings){

    console.log(`${greetings} ${this.firstName}`);
}


Function.prototype.myapply = function(obj, ...args){

    // accessing printName through this
    // printName === this because printName is the obj calling myapply
    // function can be treated as obj inisde the js
    const exeFun = this;

    // creating a method inside the obj and setting to exeFun(aka printName)
    obj.tempFun = exeFun;

    // Now, calling exeFun (aka printName) as a method of obj(aka user)
    // this inside the printName() will point to user because it is method of user
    // sperading the ...args array
    obj.tempFun(...args)

    // now remove that method from the user
    delete obj.tempFun

}


// printName.apply(user, ["Hello", "Hi", "Namaste"]);
printName.myapply(user, ["Hello", "Hi", "Namaste"])
