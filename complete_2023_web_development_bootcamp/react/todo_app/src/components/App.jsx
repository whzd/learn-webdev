import React, { useState } from "react";
import Item from "./Item"
import Input from "./Input"

function App() {

  const [ itemList, setItemList ] = useState([])

  function addItem(item) {
    setItemList([...itemList, item])
  }

  function deleteItem(id) {
    setItemList(itemList.filter((_, index) => index !== id))
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input addItem={addItem}/>
      <div>
        <ul>
        {itemList.map( (item, index) => (
          <Item
            key={index}
            id={index}
            name={item}
            onChecked={deleteItem}
          />
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
