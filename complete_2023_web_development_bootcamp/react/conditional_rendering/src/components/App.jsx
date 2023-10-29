import React from "react"
import Form from "./Form"

const registUser = true

// const isLoggedIn = false

//const currentTime = new Date().getHours()

function App() {
  return (
    <div className="container">
      <Form regist={registUser} />
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {/*
      // Ternary operator when you want do do something only when it's true
      {currentTime > 12 ? <h1> Why are you still working? </h1> : null }
      // Simpler and clever approach to the same problem using the AND operator
      {currentTime > 12 && <h1> Why are you still working? </h1>}
      */}
    </div>
  );
}

export default App;
