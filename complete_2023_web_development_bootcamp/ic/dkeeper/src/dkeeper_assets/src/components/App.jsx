import React, { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import InputNote from "./InputNote"
import { dkeeper } from "../../../declarations/dkeeper"

function App() {

  const [ noteList, setNoteList ] = useState([])

  function addNote(note) {
    const newNote = {
      ...note,
      key: noteList.length + 1
    }
    dkeeper.createNote(newNote.key, newNote.title, newNote.content)
    setNoteList([newNote, ...noteList])
  }

  useEffect(() =>{
    fetchData();
  }, [])

  async function fetchData() {
    const notesArray = await dkeeper.readNotes();
    setNoteList(notesArray);
  }

  function deleteNote(id) {
    console.log(" sljfalsjflasjfaslfs ")
    console.log(id)

    dkeeper.deleteNote(id);
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
