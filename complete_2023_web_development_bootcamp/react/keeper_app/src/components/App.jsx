import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import InputNote from "./InputNote"

function App() {

  const [ noteList, setNoteList ] = useState([])

  function addNote(note) {
    const newNote = {
      ...note,
      key: noteList.length + 1
    }
    setNoteList([...noteList, newNote])
  }

  function deleteNote(id) {
    setNoteList(noteList.filter((note) =>  note.key !== id ))
  }

  return (
    <div>
      <Header />
      <InputNote addNote={addNote}/>
      {noteList.map( note => (
        <Note
          key={note.key}
          id={note.key}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
