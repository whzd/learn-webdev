import React, { useState } from "react";

function App() {

{/* 
  // This is the way to handle a simple objcet
  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")

  function updateFName(event) {
    setFName(event.target.value)
  }

  function updateLName(event) {
    setLName(event.target.value)
  }
*/}

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  })

  function handleChange(event) {
    const { name, value } = event.target

    setContact(prevValue => ({
      ...prevValue,
      [name]:value
    }))
  }
  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
        <input 
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input 
          onChange={handleChange}
          name="lName" 
          placeholder="Last Name" 
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default App;
