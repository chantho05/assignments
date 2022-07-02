import React, { useState } from "react";
import DiceBox from "./components/DiceBox";

function App() {

const [numbers, setNumbers] = useState(0,null, null, null, null, null)

// You’d use an inline function to pass in additional arguments to 
// a function, such as a value from a loop, or the target button’s 
// value



  return (
    <div className="App">
      <DiceBox dice={numbers}/>
      {/* {number} */}
      <div className="rollBtn">
        {/* <button className="Btn" onClick={clickEvent}>Roll</button> */}
        <button className="Btn" onClick={() => setNumbers([...Array(5)].map(() => Math.floor(Math.random() * 6)+ 1))}>Roll</button>
      </div>
    </div>
  );
}

export default App;
