/*
    1. Event Delegation: It is a technique of handling event in a webpage in a better way. It is possible 
       because how events proagate up to the hierarchy.

        - Event Bubbling = Events propagate up to the dom tree
        - Event Capturing = Event propagate down to the dom tree

    - Event Delegation is based on event bubbling, event delegation is only possible due to event bubbling

    Q. What is Event Bubbling?
    - It is a event propagation technique in js, where events are triggered from the bottom to the top aka
      up to the hirerachy

    
    2. A lot of events and event handler on each every element is a huge bottleneck because 1000 events
       1000 of handlers stored inside the browser memory, which can make the website slow

       Therefore, it is recommended to use Event Bubbling

    3. Let's suppose that there is a ecommerce website where there are 1000's of categories in the list, 
       so now instead of attaching event listener to each and every category we can just attach an event
       listener to the parent element.

*/

document.querySelector('#categories').addEventListener('click', function(e){

    // as event bubbles from bottom to top
    // if we click laptops it will gives us the latop
    console.log(e.target.id);

    // So, improving the code we are only going to re-direct the user if the element clicked is <li> element
    if(e.target.tagName === 'LI');
    window.location.href = "/" + e.target.id + ".html";
})


document.querySelector('#form').addEventListener('keyup', (e)=>{

    console.log(e);
    if(e.target.dataset.uppercase !== undefined){
        e.target.value = e.target.value.toUpperCase();
    }
    
})