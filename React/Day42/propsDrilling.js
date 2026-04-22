/*
    1. Props Drilling
    Props drilling is the process of passing data through multiple intermediate components just to reach a deeply
    nested child. This can make the code harder to maintain and clutter components that don’t actually use the
    data.

    2. React Context API
    To avoid this, we can use the React Context API, which allows us to share data across components without 
    passing props manually at every level.

    # Note
    However, Context should be used carefully because it can cause unnecessary re-renders when the value changes. 
    For complex global state management, tools like Redux or Zustand can be more efficient.”

    Q: When NOT to use Context?
    Frequently changing data
    Performance-sensitive components

    Q: Alternatives?
    Component composition
    State management libraries (Redux, Zustand)

*/