/*
    1. map, filter, and reduce are higher order functions inside the Javascript because they accept
       another function as an argument, which is a callback function.

    2. There are multiple array methods which comes from Array.prototype.

    3. The .__proto__ property of evey instance of Array constructor class is pointing to Array.prototype
       All the methods and properties of array instances comes from Array.prototype

    4. Popular array properties are, length, map, filter, and reduce. Map and fitler are widely used in 
       functional based components.

*/

// users Information
const users = [
   {firstName: "Aryan", lastName:"Gupta", age:24},
   {firstName: "Steve", lastName:"Rogers", age:30},
   {firstName: "Robert", lastName:"Downey", age:27},
   {firstName: "Rengoku", lastName:"En Hasira", age:29},
]

// get the firstName and lastName of the user from the array of users
const userData = users.map((user)=>{
   return `${user.firstName} ${user.lastName}`
})

console.log(userData);

// filtering out the data from the list
const ageData = users.filter((user)=>{

   if(user.age >= 29 ){
      return user
   }
})

console.log(ageData);