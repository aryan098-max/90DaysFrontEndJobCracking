/*

4. React Fibre: (Before React Fibre: Stack Reconciler) makes React faster. 

   React Fibre is the new core algorithm employed by React that improves the reconciliation process. 
   Before React 16, react employed task-based algorithm, which was synchronous and blocked the UI when
   rendering large updates.

🔹 React Fiber replaces this with an asynchronous, incremental approach, allowing React to:

  ✔ Prioritize updates (e.g., animations, user input get priority over background tasks).
  ✔ Pause, resume, or cancel work as needed.
  ✔ Break rendering into small chunks, preventing UI freezes.


🟢 Final Answer: React Fiber is a new core algorithm that enhances the reconciliation process, making rendering
  more efficient, prioritizing updates, and improving performance. 🚀
  

    1. Virtual DOM 



    2. Reconciliation Proces: 
    The process in which the existing virtual DOM is diffed with the new virtual DOM using diffing algorithm and
    only the minimal change (whatever is changed) is updated in the Real DOM. This whole process is known as 
    reconciliation. 

    Reconciliation = Diffing + Updating the Real DOM (the full process).


    3. Diffing Algorithm: 
    It is an algorithm, which compares the new virtual DOM (new obj) with the existing virtual DOM (previous obj) 
    and finds out the required changes needed to be updated in the actual DOM. This change is then applied by the 
    React through reconciliation process. 



*/