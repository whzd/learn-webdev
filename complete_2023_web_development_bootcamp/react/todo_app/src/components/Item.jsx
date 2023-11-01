import React, { useState } from "react";

function Item(props) {
  {/* 
  const [ itemStyle, setItemStyle ] = useState({
    textDecoration: ""
  })

  function changeStyle() {
    setItemStyle(itemStyle.textDecoration === "" ? {textDecoration: "line-through"} : {textDecoration: ""})
  }
  */}

  return(
    <li 
      onClick={() => {
      props.onChecked(props.id)
    }}>{props.name}</li>
  )
}

export default Item
