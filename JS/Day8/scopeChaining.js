/**
 * 
    1. Scope: Scope of a variabe means where I can access the variable b.

    2. Scope Chaining:
    Scope chaining is a process of resolving a variable name first by searching a variable in its local scope. 
    If it is not found there then it goes its lexical scope (parent scope or outer scope). Finally, It goes all 
    the way  up to global scope to look for the variable

    - Chain of lexical env can be also called as scope chaining because we move from local to lexical env of its
      parent and again global lexical env
    
    3. Lexical Env - A inner function scope (local scope) + its outer function scope (outer scope aka lexical )
       scope is known as Lexical Env.

       - Lexical Env = local memory + lexical env of its parent (b)

 */

// function a(){
//     // The function a first looks for the b inside the local scope, later it searches the variable at the outer 
//     // scope, which is known as scope chaining.
//     console.log(b);
// }

// var b = 10;
// a();


// function b points to lexical env of a, a points to global lexical env

// In Chrome Browser Dev Tools we will be able to see: anonymous (GEC), a (Execution Conext) & b (EC)
// Inside the chrome browser if we click each call stack and check the scope we will be able to see
// local scope + lexical env of its parent + global lexical env

// Lexical Env of its parent is shown in the form of closure - Closure (b) x:10

function a(){

    // Its scope is local - It can be only accessed inside the a and b 
    let x = 10;
    function b(){
        // b function is lexically inside a (lexically = physically)
        // Along with its local scope, it gets access to lexical env of its parent as well
        console.log(x);
    }
    b();
}
// variable defined in global env - global lexical env
var y =10;
a();
