/*
    1. We can stop the propagation of the event and to do that we need to use a method available on
       event object which is know as e.stopPropagation()


    We will focus on two cases of propagation one for capturing and one for bubbling

    2nd Case: stopping propagation on Bubbling
    Stops at Parent (child clicked, P clicked)

    So, basically, stopPropagation acts comletely opposite on bubbling and capturing (trickling)

*/

    // 2nd Case: Bubbling

    document.querySelector('#grandparent').
    addEventListener('click', function(e){
        console.log('Grandparent is clicked')
    }, false)

    document.querySelector('#parent').
    addEventListener('click', function(e){
        console.log('Parent is clicked');
        e.stopPropagation();
    }, false)

    document.querySelector('#child').
    addEventListener('click', function(e){
        console.log('Child is clicked')
    }, false)

