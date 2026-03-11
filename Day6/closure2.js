
// ===============1st Question=============================>

// Note: if we use var it will share a single copy of i with all the calls and finally, they print 6,6,6,6,6
// All the callback function point to the same reference because var is a global variable
// However, we want 1 after 1s, 2 after 2s, 3 after 3s, ...........

// Therefore, we have to use
// let has block scope each iteration have separate copies of i
// closure is formed with separate copy of i at each iteration
function A(){
    // each iteration has separate copy of i
    for(let i=0;i<=5;i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
}
A();
// =============================================>

// ====================2nd Question=========================>

/*
    1. Using a third function inside for loop to create spearate copy of i
    2. Function has local scope: each function call create a separate copy of i
    3. Each copy creates a closure when a function is called. 
 
*/

function B(){
    for(var i=0;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            })
        }
        // now this i will be allocated memory in local space and closure is formed 
        // with separate copies of i each time and function is called. 
        close(i);
    }
}
B();

// =========================================================>

// ==================== 3rd Question ========================> 

    function outest(){
        let a = 20
        function outer(b){
            return function inner(){
                console.log(a,b)
            }
        }
        return outer;
    }

// The second parenthesis is going to call outer which is being returned from outest
// The result of the second outer is then saved inside result 
    let result = outest()(30);
    result();


// ======================= 4th question ========================>

    function counter(){
        let count = 0;
        return function incrementCounter(){
            count ++;
            console.log(count)
        }
    }
    
    // returning incrementCounter from counter()
    let result1 = counter()
    result1();
    result1()
    
    // It is a separate counter altogether
    // returning second time from counter()
    // result2() will start the counter from zero again 
    let result2 = counter();
    result2();
    result2();

// ============================================================>
 