import React, { useState } from "react";

function App() {

  const [ bgColor, setBGColor ] = useState("white")
  const [ value, setValue] = useState("")
  const [ name, setName ] = useState("")

  function mouseover() {
    setBGColor("black")
  }

  function mouseout() {
    setBGColor("white")
  }

  function handleChange(event) {
    setValue(event.target.value)
  }

  function submit() {
    setName(value)
    setValue("")
  }

  function preventRefresh(event) {
    event.preventDefault()
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <form onSubmit={preventRefresh}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={value}
        />
        <button
          style={{backgroundColor : bgColor}}
          type="submit"
          onMouseOver={mouseover}
          onFocus={mouseover}
          onMouseOut={mouseout}
          onBlur={mouseout}
          onClick={submit}
        >Submit</button>
      </form>
    </div>
  );
}

export default App;
