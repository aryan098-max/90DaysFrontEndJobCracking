/*
    1. We can stop the propagation of the event and to do that we need to use a method available on
       event object which is know as e.stopPropagation()


    We will focus on two cases of propagation one for capturing and one for bubbling

    1st Case: stopping propagation on Capturing
    Stops at Parent (GP clicked, P clicked)
    
*/  

    // 1st Case: Capturing

    document.querySelector('#grandparent').
    addEventListener('click', function(e){
        console.log('Grandparent is clicked')
    }, true)

    document.querySelector('#parent').
    addEventListener('click', function(e){
        console.log('Parent is clicked');
        e.stopPropagation();
    }, true)

    document.querySelector('#child').
    addEventListener('click', function(e){
        console.log('Child is clicked')
    }, true)

