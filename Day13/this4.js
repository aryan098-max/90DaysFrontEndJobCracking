// this inside the arrow function depends where it is lexically present

// arrow function inside global space

// this arrow function is lexically present inside the global space
const sayHello = () =>{
    console.log(this); // window object
}

sayHello();

// arrow function as a method of an obj
const obj = {

    fName:"Aryan",
    // it is an arrow function and the entire obj is lexically enclosed in global space
    // Thefefore, this points to window obj
    userInfo: () => console.log(this) 
}

obj.userInfo();


// arrow function inside the nested function

const obj2 = {

    fName:"Aryan",
    // arrow function is lexically inside an another function whose this is defined as obj2
    // Thefefore, console.log(this) - obj2
    userInfo: function outer(){
        // inner is lexically inside userInfo method whose this context is set to obj2
        const inner = () =>{
            console.log(this);
        }
        inner();
    }
}

// # Note: You are not allowed to call obj2.userInfo.user() wrong

obj2.userInfo();
