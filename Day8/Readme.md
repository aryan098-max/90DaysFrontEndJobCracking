1. Scope: Scope of a variabe means where variable is defined and where I can access it

2. Scope Chaining:
    Scope chaining is a process of resolving a variable name first by searching a variable in its local scope. 
    If it is not found there then it goes its lexical scope (parent scope or outer scope). Finally, It goes all 
    the way  up to global scope to look for the variable

- Chain of lexical env can be also called as scope chaining because we move from local to lexical env of its
  parent and again global lexical env

3. Lexical Env - A inner function scope (local scope) + its outer function scope (outer scope aka lexical )
    scope is known as Lexical Env.

  - Lexical Env = local memory + lexical env of its parent (b)