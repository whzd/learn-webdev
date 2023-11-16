import React, { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function InputNote(props) {

  const [ input, setInput ] = useState({
    title: "",
    content: ""
  })

  const [ show, setShow ] = useState(false)

  function handleClick(params) {
    setShow(true)
  }

  function handleChange(event) {

    const { name, value } = event.target

    setInput( prevValue => ({
      ...input,
      [name]: value
    }))
  }

  return(
    <div>
      <form className="create-note">
        {show && <input 
          name="title" 
          onChange={handleChange} 
          placeholder="Title" 
          value={input.title}
        />}
        <textarea 
          onClick={handleClick}
          name="content" 
          onChange={handleChange} 
          rows={show ? "3" : "1"}
          placeholder="Take a note..." 
          value={input.content} 
        />
        <Zoom in={show}>
          <Fab
            onClick={() =>{
              props.addNote(input)
              setInput({
                title: "",
                content: ""
              })
            }}
            type="button"
          ><AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default InputNote
