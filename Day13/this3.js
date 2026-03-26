// sharing methods across objects with call, apply, & bind

const user1={
    fName:"Aryan",
    userInfo: function(){
        console.log(this.fName);
    }
}

const user2 = {
    fName:"Steve"
}

// Since, user2 doesn't have userInfo method we can share it with user2 using call
// call(takes the value of this) here, it is user2, therefore, userInfo() method
// will point to user2 for this instance
user1.userInfo.call(user2);


// call, apply, & bind with this keyword and function

const user = {
    fName:"Aryan",
}

// this inside this function points to user obj
function userInfo(){

    console.log(this.fName)
}

// value of this is userInfo now
userInfo.call(user);