/*
 React Hooks:
 React Hooks are special JS functions, which allow us to access React’s state and lifecycle features inside 
 a Functional Component, instead of writing class components. Hooks make it easier to manage state, reuse 
 logic, and write code. 


 1. useState() Hook
 It is a JS function, which returns a state variable and a function to update that state variable. 

 Q. What is state variable?
 State variable is superpowerful variable returned by the useState(), which allows component to store, 
 manage, and persists data across multiple re-renders. Whenver, any change on this state variable is 
 made a component is re-rendered.

 State variable is also responsible for keeping the data layer in sync with UI layer. Whenever we make
 change in data layer (state changed), 


 Q. What is state updater function?
 State updater function is responsible for updating the state, which triggers the re-rendering.

 Q. What happens when state are mutated directly?
 When states are updated directly, without using the setter function, the component doesn't re-render, causing 
 an error. 

*/
