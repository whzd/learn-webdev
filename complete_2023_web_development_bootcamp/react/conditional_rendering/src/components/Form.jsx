import React from "react"
import Input from "./Input"

function Form(props) {
  return(
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {props.regist && <Input type="password" placeholder="Confirm Password" />}
        {props.regist ? <button type="submit">Register</button> : <button type="submit">Login</button>}
      </form>
  )
}

export default Form
