Q. Interview question: Are let and const variable hoisted at top?

    Yes, let and const variable are hoisted at top but they are assigned memory in a separate memory object
    called script. You can’t access a variable declared with let and const before it is initialized a value
    because they are in Temporal Dead Zone. They are also assigned a special placeholder called undefined.

1. Temporal Dead Zone: It is a time period in which variable declared with let and const are not available
    until its initalization.

    You can't access let and const before its initalziation (assinged a value). It throws an uncauught reference
    error.