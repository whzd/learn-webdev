import React from "react";

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

function Heading() {
  return <h1 style={greetingsStyle} >{`${customGreeting}!`}</h1>
}

export default Heading
