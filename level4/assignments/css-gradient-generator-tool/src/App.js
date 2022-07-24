import React from 'react'
import { ChromePicker } from 'react-color'
 
export default function Component() {
 
  const divStyle = {
      border: "solid",
      width: "225px",
      height: "300px"
      
  }


  return(
    <div style={ divStyle }>
      <ChromePicker />
    </div>
  )
}

