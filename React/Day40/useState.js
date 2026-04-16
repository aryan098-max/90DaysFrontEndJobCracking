/*  
    useState Hook:
    useSate Hook is react hook which returns a state variable and a setter function (aka state updater function)
    to update this state variable. 

    State variable:

    State variable is a variable returned by useState() hook, which is used by component to store and manage 
    data because its value persists across multiple re-renders

    This state variable is the most powerful variable in react because whenever the value of this state variable 
    is updated using setter function component re-renders. This state variable syncs UI layer with Data layer.


    Setter Function:
    This setter function is responsible for updating the state variable, which causes component to re-render.
    Only, when setter function updates the state variable, component re-renders.

    #Note: If we directly, try to update state variale without using setter function, it causes an error.


*/


import { use, useState } from "react";

function Hooks(){

    const [firstName, setFirstName] = useState("");

    return (
        <div>
            <input value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            <h1>{firstName}</h1>
        </div>
    )
}

export default Hooks;