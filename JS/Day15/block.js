/**
    1. What is a Block?
    A group of statements grouped together inside a curly braces is known as Block. It is also known
    as compound statement

    - Why we need a block?
    We need a block to group multiple statements together where JS except only single line of code 

    if() console.log(), if excepts only single statement; however, we might need multiple statements
    to build logic and write code; therefore, we need block.

    2. What is a Block Scope?
    Variables and function which are accessible/available inside the block is known as block scope.

    Each block in JS has its own lexical env

    3. Note: The variable declared with let and const keyword are blocked scope. So, they can’t 
    be accessed outside the block. 
    
    After the code within the block is executed. It is immediately deleted. 

    4. Each time a for loop runs for(let i=0; i<n; i++); in this case, a separate copy of i is 
    created each time loop run

    Q. If Each loop creates a separate  copy of (i) how is the value of (i) increased each time?
    Through a process of Binding Recovery incremented value is forwarded.

    Q. Why Let and const are block scoped?
    Let and const are block scoped because they are allocated memory in a separate memory space: block. 
    They are only accessible inside the block. Therefore, they are called block scope. 

    Q. Is var block scoped?
    No, var is not block scoped, the variable declared using var keyword inside the block scope is leaked, it is
    allocated memory in the global scope.


 */

{
    // assigned memory in global scope
    var a = 20;
    // console.log(b); // causes error 
    // allocated memory inside block scope
    let b = 20;
    console.log(b);
}

console.log(a);

// We can't access b outside the block