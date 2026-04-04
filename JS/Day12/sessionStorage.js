
/*
    1. Session Storage:
    It is also used to store key and value pairs inside the browser but it stores the data only for 
    that paticular session only.

    Cookies sent data to the server while making network request call; However, session storage doesn't 
    do that. Cookies can only store 4000 bytes of data.

*/

// It is only stored for a that session only
// Setting data
sessionStorage.setItem("Rengoku", "En Hasira");
sessionStorage.setItem("Gyomei", "Iwas Hasira");
sessionStorage.setItem("Giyu", "Mizu Hasira");

// getting
console.log(sessionStorage.getItem("Rengoku"));

// removing, it doesn't return anything
sessionStorage.removeItem("Giyu");

// clear all the keys
// localStorage.clear();

// Storing an obj as a value in session storage for machine coding round interview
const user = {firstName:"Aryan"}
console.log(JSON.stringify(user)); // {firstName: "Aryan"}

// If we try to directly store the user obj into the browser it converts into [object, object]
// Therefore, we need to convert it into an string before storing it
sessionStorage.setItem("user", JSON.stringify(user))