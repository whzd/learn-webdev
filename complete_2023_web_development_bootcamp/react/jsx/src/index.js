import React from "react"
import ReactDOM from "react-dom"

const title = "Eng."
const name = "whzd"

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">Hello {`${title} ${name}`}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 20 + 1)}.</p>
    <div>
      <img src="https://static.wikia.nocookie.net/howrse/images/1/14/5th_element_water.png/revision/latest?cb=20220814144649"/>
      <img src="https://static.wikia.nocookie.net/howrse/images/9/93/5th_element_fire.png/revision/latest?cb=20220814144645"/>
      <img src="https://static.wikia.nocookie.net/howrse/images/8/86/5th_element_earth.png/revision/latest?cb=20220814144644"/>
    </div>
    <p> Created by {name}.</p>
    <p> Copyright {new Date().getFullYear()}.</p>
  </div>,
  document.getElementById("root")
)
