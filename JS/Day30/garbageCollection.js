/*
   1.Garbage collection: JS is a high-level language; therefore, developers don’t have to manually free the
     memory occupied by variables, functions, and objects, which are no longer reachable. It manages this 
     task through a process called garbage collection. It monitors all objects, variables, and function 
     removes those that have become unreachable. This eliminates the need for programmers to manually free
     up memory (like you would in lower-level languages such as C or C++). 

     When variables, objects, or functions are no longer in use or accessible in a program, the JavaScript engine 
     identifies them as unreachable and uses the Mark-and-Sweep algorithm to release the memory they occupy. This
     allows JavaScript to free up memory without the developer needing to manually manage it. 

     In JavaScript, there is a routine who does this, called Garbage collector. It is responsible for tracking 
     all the processes and remove those objects that have become unreachable. This process is called automatic
     memory management with reference to JavaScript.

     	
    Q. How garbage collection works step-by-step using Mark and Sweep Algorithm? 
    1. JS is a high-level language; therefore, it manages memory through a process called garbage collection, which is done automatically.
    2. During garbage collection, the garbage collector identifies all the roots and marks them (remembers them). Roots = global variables, objects, currently executing function, params and variables
    3. Then it visits each root and marks all the references from them.
    4. However, if a reference is no longer reachable, it is not marked, and the memory occupied by it is freed (swept).
    5. The references that are not reachable are not marked; therefore, the memory occupied by them is freed.

    JS engines have a background process for garbage collection known as garbage collector. 
    In JavaScript, garbage collection is managed automatically, primarily through the mark-and-sweep algorithm. 
    The garbage collector identifies root objects, marks all reachable objects from those roots, and frees memory 
    occupied by any unmarked (unreachable) objects. This process occurs periodically, so memory used by unreachable
    references is regularly released.
    
    Note: roots? What do you mean by that?
    GC starts with root objects, which are references accessible directly within the GEC. Common roots include 
    the global object (window in browsers), local variables in functions, currently executing function and active 
    event listeners.	
 */

  /*
    Interview Ready Answer

    1. JS is a high level language therefore, it automatically manages memory through a process known as Garbage
       collection. If a memory space is occupied by variables, functions, or objects, which are no longer reachable
       they are garbage collected using Mark and Sweep Algorithm.
  
    2. How mark and sweep alogrithm works?

        1. First it marks down all the roots, such as global variables, functions, and objects
        2. After, that it marks all the references from the roots
        3. However, if a reference is no longer reachable, it is not marked and the memory occupied 
           by this reference is freed (swept)
  
  */


// For example, not reachable location, not any reference present:
// An object is assigned to a global variable
var obj = {
    name:"Aryan" 
}

// we won’t have any reference to the obj anymore. therefore, it is garbage collected
obj = null;

// In the above code, an object is assigned to a global variable, which has a property name, which is 
// assigned to null. Now, this obj variable won’t have access to that object anymore. Therefore, it is
// garbage collected as reference to that property is lost.  