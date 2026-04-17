/*
    1. useEffect():

    It is a react hook which runs after a component re-renders. It takes a callback function and
    a dependency array, which controls when the effect runs

    Three scenarios

    1. useEffect(()=>{}, []) - run once (on mount)
    2. useEffect(()=>{},[state variable]) - runs when state change
    3. useEffect(()=>{}, ) - no dependency array runs on every render

    This hook is used for 
    1. api calls, 
    2. subscriptions, & 
    3. DOM operations

*/