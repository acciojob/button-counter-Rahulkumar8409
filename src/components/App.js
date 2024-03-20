import  { useState } from "react";
import React from "react";
import './../styles/App.css';

function App() {
  const [counter, setCounter] = useState(1);


  
  const addValue=()=>{
    setCounter(counter + 1);
  }


  return (
    <div>
       <p>Button clicked {counter}times</p>
       <button onClick={addValue}>click me</button>
    </div>
  );
}

export default App;
