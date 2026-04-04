/*
    1. Second Example of Event Delegation

    # Note This code is a perfect example of how Event Delegation and HTML Data Attributes work together to 
    create "smart" elements. 

    It is Event Delegation because you are not attaching the keyup listener to the individual <input> elements. 
    Instead, you are attaching a single listener to their parent: the <div id="form">.
    
    Here is why it fits the definition perfectly:

    1. The Parent is the "Manager": You wrote document.querySelector('#form').addEventListener(...). The #form 
       div is the parent. It is "delegated" the task of watching over all its children.

    2. The "Bubble" is the Messenger: When you type in the #name input, the keyup event doesn't stay there. 
       It bubbles up to the #form div.

    3. The "Target" identifies the Source: Inside the function, e.target tells the parent exactly which child 
       triggered the event. The parent doesn't care about its own ID; it only cares about the e.target 
       (the specific input) that sent the bubble.

    Q. Why this is a "Smart" Delegation?

       1. Normally, if you had 50 inputs, you'd need 50 listeners. With this code:
       2. You use one listener on the div.
       3. You use HTML attributes (data-uppercase) as "instructions" for that listener.

    
    2. Advantage of Event Delegation
        - It saves a lot of memory as we are assinign event listener to only parent element
        - It also make our website to load faster
        - Easy to manipulate DOM


*/

document.querySelector('#form').addEventListener('keyup', (e)=>{

    console.log(e);
    if(e.target.dataset.uppercase !== undefined){
        // making input value uppercase
        e.target.value = e.target.value.toUpperCase();
    }
    
})