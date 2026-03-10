// keyup, keydown, keypress, onclick, thsee all are events

// Attaching event listener to an event


const input = document.getElementById('myInput');

// keydown is an event and a callback function is passed to listen to that event
input.addEventListener("keydown", ()=>{
  console.log("A key was pressed")
})