/*  
    1. React Context API:
    React Context API is a way of sharing data across multiple nested components without manually passing props
    through every level (avoiding props drilling). It allows/helps to create a central store for data which can
    be accessed via every component. However, they must be wrapped using React provider.

    It works by creating a context using createContext(), then wrapping components with a Provider to supply the
    data. Any component inside that Provider can access the data using useContext().

    It’s commonly used for things like theme, authentication, or global settings.

    # Note
    However, Context is not a full state management solution — it doesn’t handle complex state logic or 
    optimizations like Redux. Also, when the context value changes, all consuming components re-render, 
    so it should be used carefully.”


    It works in three parts:
    createContext() → creates the context
    Provider → supplies the data
    Consumer (or hook) → accesses the data

    The useContext() hook is a simpler way to consume context in functional components. Instead of using
    <Context.Consumer>, we can directly access the value using useContext().

    So basically, Context API provides the mechanism, and useContext() is the hook used to read that data.”

    # Note1
    “Context API is used to share global data across components, and useContext() is the hook that allows us to
    access that data easily in functional components.”

    # Note2
    “Whenever the context value changes, all components consuming it re-render — so it should be used carefully for performance-sensitive data.”

*/