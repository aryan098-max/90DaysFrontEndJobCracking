// singleton obj
// const tinderUser1 = new Object();
const tinderUser2 = {};

tinderUser2.id = "123abc",
tinderUser2.name = "Sammy",
tinderUser2.isLoggedIn = false;

// console.log(tinderUser2)

const regularUser = {

    userName:{
        fullName:{
            firstName:'Aryan',
            lastName:'Gupta'
        }
    }
}



// accessing properties using chaining
console.log(regularUser.userName.fullName.firstName)

// Mostly, used in react for creating a new copy of the obj for page reload
const obj1 = {firstName:"Aryan", lastName:"Gupta"}
const obj2 = {course:"bachelors in ccomputer science"}

// now, creating a new obj using spread 
const obj3 = {...obj1, ...obj2};
console.log(obj3);

// Data coming from the database, array of objects
const users = [
    {id:1, email:"aryan123@gmail.com"},
    {id:2, email:"steve123@gmail.com"},
    {id:3, email:"robert123@gmail.com"}
]

// To map all the values we need to use map otherwise use
console.log(users[0].email);

// Getting all the keys and values, returns an array
// It accepts an obj as an argument
console.log(Object.keys(tinderUser2));
console.log(Object.values(tinderUser2));

// returns an array of array 
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// Similar to map obj, in the sense it also gives array of array - 2D array
console.log(Object.entries(tinderUser2));

// For checking a user has a property inside it or not
// returns a boolean value
console.log(tinderUser2.hasOwnProperty('isLoggedIn'));
