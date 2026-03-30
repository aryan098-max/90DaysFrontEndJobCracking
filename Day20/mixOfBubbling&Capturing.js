    /*
        1. We can further control how we manipulate event bubbling and capturing, we can mix them 

        # Note: Event Capturing always happens first

        // For example, List of actions

        1. Grandparent clicked - stops at Grandparent because false - bottom to top (Grand parent is bottom itself)

        2. Parent clicked - P clicked, GP clicked, because after capturing cycles complete bubbling happens
           but here it stops at parent

        3. Child Clicked - P clicked, C clicked, GP clicked, (Capturing executes first)
    
    
    */
    
    // - First scenario
    // document.querySelector('#grandparent').
    // addEventListener('click', function(){
    //     console.log('Grandparent is clicked')
    // }, false)

    // document.querySelector('#parent').
    // addEventListener('click', function(){
    //     console.log('Parent is clicked')
    // }, true)

    // document.querySelector('#child').
    // addEventListener('click', function(){
    //     console.log('Child is clicked')
    // }, false)

    // - Second scenario
    document.querySelector('#grandparent').
    addEventListener('click', function(){
        console.log('Grandparent is clicked')
    }, true)

    document.querySelector('#parent').
    addEventListener('click', function(){
        console.log('Parent is clicked')
    }, false)

    document.querySelector('#child').
    addEventListener('click', function(){
        console.log('Child is clicked')
    }, true)