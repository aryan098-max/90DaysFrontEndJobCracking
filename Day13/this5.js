// user1.__proto__ === User.prototype
// protoype here acts as a blueprint for creating objects using constructor function

function User(fName){

    // when this constructor is called an empty obj is created and assigned to this
    // Adding properties to this empty obj
    this.fName = fName;

    // this is implicity retured from constructor function

}

const user1 = new User("Aryan");
// Aryan will be printed because user1 is assinged the implicity returned empty obj
console.log(user1.fName);