
/*
    # Note: Local Storage is attached to windown obj; therefore, we can access it anywhere in the code

    1. Local Storage 
    It is a mechanism of storing key value pairs data inside the browser. It says in the browser even the tab
    is closed.

    It doesn't clear itself, it doesn't come with an expiry. Even if the user closes the tab, browser or even
    shutdown the computer the data is still persistent in the browser.

    It can keep the data store for that user in his browser as long as you want. It has the highest storage 
    capacity compared to session.

    2. What is the use of Local Storage?
    It can be used to store user's data in the browser instead of saving it inside the database. The advnatage
    of doing this is that we can quickly reterieve data compared to retreving it from the browser.

    For example, Flipkart is one of the most popular website in India store a good amount of data in the browser.

    2. The storage apis like Local Storage, Session Storage follows same origin policy because of security concerns
    - Due to security reasons they follow same origin policy

    - Origin comprises of three things
        1. http/https
        2. host or domain (www.aryantesting.com)
        3. port (8080)

    - When we say that we are setting some data into local storage, we are setting the data for the paticular origin
    - Let's suppose we are setting some data into origin: http://aryantesting.com
    - Can we access the data from? http://aryantesting.com/data.php ? 
      Yes, we can do that because we are in the same origin. - Our origin, host, and port all remain the same

    
    # Note: To access the data we have set using the local storage for an origin http://aryantesting.com we need
      to be on the same origin.

      - Same origin means: same http method: http, not https
      - It also can't have extra subdomain
      - It can't have different port also 

    - We can't access data on
        1. https://aryantesting.com
        2. http://aryantesting.com:8080 - Different port default port is 80
        3. http://blog.aryantesting.com - Different subdomain

*/

// It is stored in the browser even after the tab is closed
// Setting data
localStorage.setItem("Rengoku", "En Hasira");
localStorage.setItem("Gyomei", "Iwas Hasira");
localStorage.setItem("Giyu", "Mizu Hasira");

// getting
console.log(localStorage.getItem("Rengoku"));

// removing, it doesn't return anything
localStorage.removeItem("Giyu")

// clear all the keys
// localStorage.clear();

// Storing an obj as a value in local storage for machine coding round interview
const user = {firstName:"Aryan"}
console.log(JSON.stringify(user)); // {firstName: "Aryan"}

// If we try to directly store the user obj into the browser it converts into [object, object]
// Therefore, we need to convert it into an string before storing it
localStorage.setItem("user", JSON.stringify(user))