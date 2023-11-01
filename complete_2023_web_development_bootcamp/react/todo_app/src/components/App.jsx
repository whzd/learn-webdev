import React, { useState } from "react";

function App() {

  const [ item, setItem ] = useState("")
  const [ itemList, setItemList ] = useState([])

  function handleChange(event) {
    setItem(event.target.value)
  }
  
  function addItem() {
    setItemList([...itemList, item])
    setItem("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          onChange={handleChange} 
          type="text"
          value={item}
        />
        <button 
          onClick={addItem}
          type="button"
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {itemList.map( item => (
          <li>{item}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
