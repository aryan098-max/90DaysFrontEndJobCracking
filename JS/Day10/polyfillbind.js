    /*
        The major difference between mybind vs mycall & myapply is that I am returning a new function and 
        concept of closure is applied here

    */

const user = {
    firstName:"Aryan"
}

function printUserInfo(...greetings){

    console.log(`${greetings.join(",")}, ${this.firstName}`);
}


// 1st Approach - using misdirection
Function.prototype.mybind = function (obj, args){

    // accessing PrintUserInfo through this
    const exeFun = this;
    
    return function(...newArgs){
        
        // creating a method inside the user obj
        // Binding
        obj.tempFun = exeFun;

        // calling that method
        obj.tempFun(...args, ...newArgs);

        // cleanup
        delete obj.tempFun;
    }
}

// 2nd Approach - using apply
Function.prototype.mybindSecond = function (obj, args){

    // accessing PrintUserInfo through this
    const exeFun = this;
    
    return function(...newArgs){
        // calling that method
        exeFun.apply(obj, [...args, ...newArgs]);
    }
}


// preset the value of this 
// const displayName = printUserInfo.bind(user);

const displayName = printUserInfo.mybindSecond(user, ["Hello", "Hi", "Namaste"])
// console.log(displayName);
displayName("Ola");