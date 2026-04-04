1. Event Delegation: It is a technique of handling event in a webpage in a better way. It is possible 
    because how events proagate up to the hierarchy.

    - Event Bubbling = Events propagate up to the dom tree
    - Event Capturing = Event propagate down to the dom tree

    - Event Delegation is based on event bubbling, event delegation is only possible due to event bubbling

Q. What is Event Bubbling?
- It is a event propagation technique in js, where events are triggered from the bottom to the top aka
    up to the hirerachy

    
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


4. Advantage of Event Delegation
    - It saves a lot of memory as we are assinign event listener to only parent element
    - It also make our website to load faster
    - Easy to manipulate DOM
