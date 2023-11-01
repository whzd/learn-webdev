import React, { useState } from "react";
import Item from "./Item"

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

  function deleteItem(id) {
    setItemList(itemList.filter((_, index) => index !== id))
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
        {itemList.map( (item, index) => (
          <Item key={index} id={index} name={item} onChecked={deleteItem}/>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
