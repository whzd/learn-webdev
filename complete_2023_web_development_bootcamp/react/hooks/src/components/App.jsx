import React, { useState } from "react";


function App() {

  const currentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
  
  let [time, setTime] = useState(currentTime)

  function updateTime() {
    setTime(new Date().toLocaleTimeString('en-US', {hour12: false}))
  }

  /*
  let [count, setCount] = useState(0)

  function increase() {
    setCount(count++)
  }

  function decrease() {
    setCount(count--)
  }
  */
  setInterval(updateTime, 1000);

  return(
    <div className="container">
      <button>Current Time</button>
      <h1>{time}</h1>

      {/*
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      */}
    </div>
  )
}

export default App;
