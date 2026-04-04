
/*  
   Q. What is Event Delegation?

    Event Delegation is a technique in JavaScript where you attach a single event listener to a parent 
    element instead of adding event listeners to multiple child elements. It works because of event 
    bubbling—events triggered on child elements bubble up to their parent, where they can be handled 
    efficiently.

    Why Use Event Delegation?
    ✅ Efficient Memory Usage → Instead of adding event listeners to multiple elements, we add just
     one to the parent.
    ✅ Handles Dynamically Added Elements → Works even if new child elements are added later.
    ✅ Simplifies Code → No need to manually loop through child elements to attach listeners.


    The main advantage of using Event Delegation is that we don't have to add event listener to each 
    and every child element of the parent element. 

    OTHER ADVANTAGES

    1. Memory Efficency
    2. Less Code
    3. DOM manipulation

   // ===========================================================================================================>

   - Event Delegation is based on event bubbling, Event Delegation is only possible through event bubbling. 

    Down below a HTML code is given, we are trying to open a page if a li is clicked, but with the help of
    Event Delegation. Now, instead of adding separate html code for every li we are going to use Event 
    Delegation to open a link when a <li> is clicked. 

   - If a user clicks shoes then a shoes page is opened and event is bubbled out to <ul>

*/

/*
    HTML Code

        <div>
        <ul id="categories">
            <li id="laptos"> Laptops </li>
            <li id="cameras"> Cameras </li>
            <li id="shoes"> Shoes </li>
        </ul>
    </div>

*/

// A event is added to categories such that any <li> clicked will bubble out to parent <ul>

document.querySelector("#categories")
.addEventListener("click",function(e){
    console.log(e.target.id); // target - helps to check which <li> was clicked

    // we can further add constraints on it, if we want to open the page if element licked is li

    if(e.target.tagName == 'LI'){
        window.location.href = "/" + e.target.id; // dynamically going to traget page
    }
})
