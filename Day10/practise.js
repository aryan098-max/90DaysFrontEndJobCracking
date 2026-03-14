const user = {
    firstName: "Aryan"
}

// this is set to user
function printName(...arg){

    console.log(`${arg.join("")}  ${this.firstName}`);
}


Function.prototype.mycall = function(obj, ...args){

    // accessing printName
    const exeFun = this

    // binding
    obj.tempFun = exeFun

    // calling tempFun
    obj.tempFun(...args);

    // cleaning obj (aka user)
    delete obj.tempFun
    
}

// doesn't return a new function
printName.mycall(user, "Hello");

