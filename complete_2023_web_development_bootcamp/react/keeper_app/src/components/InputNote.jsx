import React, { useState } from "react"

function InputNote(props) {

  const [ input, setInput ] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {

    const { name, value } = event.target

    setInput( prevValue => ({
      ...input,
      [name]: value
    }))
  }

  return(
    <div>
      <form>
        <input 
          name="title" 
          onChange={handleChange} 
          placeholder="Title" 
          value={input.title}
        />
        <textarea 
          name="content" 
          onChange={handleChange} 
          rows="3" 
          placeholder="Take a note..." 
          value={input.content} 
        />
        <button 
          onClick={() =>{
            props.addNote(input)
            setInput({
              title: "",
              content: ""
            })
          }}
          type="button"
        >Add</button>
      </form>
    </div>
  )
}

export default InputNote
