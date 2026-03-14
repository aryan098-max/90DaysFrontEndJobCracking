const user = {
    firstName: "Aryan"
}

// this is set to user
function printName(){

    console.log(this.firstName);
}

// doesn't return a new function
printName.call(user);


Function.prototype.mycall = function(obj){

    
}