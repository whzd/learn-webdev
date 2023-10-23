import React from "react"
import ReactDOM from "react-dom"

const title = "Eng."
const name = "whzd"

ReactDOM.render(
  <div>
    <h1>Hello {`${title} ${name}`}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 20 + 1)}.</p>
    <ul>
      <li>element1</li>
      <li>element2</li>
      <li>element3</li>
    </ul>
    <p> Created by {name}.</p>
    <p> Copyright {new Date().getFullYear()}.</p>
  </div>,
  document.getElementById("root")
)
