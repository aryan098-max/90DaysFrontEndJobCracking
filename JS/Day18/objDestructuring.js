const user = {
    firstName: "Aryan",
    lastName:"Gupta"
}

// In this way, we can destructure values but the name of the variable should be same as key
const {firstName, lastName } = user;
console.log(firstName);
console.log(lastName);

// We usally do this when we are fetching something from the api
async function getData(){

    const response = await fetch('https://api.github.com/users/aryan098-max');
    const data = await response.json();
    // It is an obj and we can destrucutre values from it
    // console.log(data);

    const {login, id, url} = data;
    console.log (login, id, url);
}

getData();