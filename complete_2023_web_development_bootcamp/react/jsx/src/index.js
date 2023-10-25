import React from "react"
import ReactDOM from "react-dom"

const title = "Eng."
const name = "whzd"
const waterElemImg = "https://cdn.homedit.com/wp-content/uploads/feng-shui/The-Water-Element.jpg"
const fireElemImg = "https://cdn.homedit.com/wp-content/uploads/feng-shui/Fire-element-in-feng-shui.jpg"
const earthElemImg = "https://cdn.homedit.com/wp-content/uploads/feng-shui/Adding-the-Earth-Element-to-Your-Interior-Spaces.jpg"

const customStyle = {
  color: "red",
  fontSize: "20px",
}

customStyle.color = "blue"

const currentHour = new Date().getHours()
let customGreeting = "Good Morning"

const greetingsStyle = {
  color: "red"
}

if (currentHour > 18){
  customGreeting = "Good Night"
  greetingsStyle.color = "blue"
}else if(currentHour > 12){
  customGreeting = "Good Afternoon"
  greetingsStyle.color = "green"
}

ReactDOM.render(
  <div>
    <h1 style={greetingsStyle} className="heading" contentEditable="true" spellCheck="false">{`${customGreeting} ${title} ${name}!`}</h1>
    <h2> {`It is currently ${currentHour}`}</h2>
    <h3 style={customStyle}>Cropicus Calares</h3>
    <p>Your lucky number is {Math.floor(Math.random() * 20 + 1)}.</p>
    <div>
      <img src={waterElemImg} alt="water elemental" />
      <img src={fireElemImg} alt="fire elemental" />
      <img src={earthElemImg} alt="earth elemental" />
      
    </div>
    <p> Created by {name}.</p>
    <p> Copyright {new Date().getFullYear()}.</p>
  </div>,
  document.getElementById("root")
)
