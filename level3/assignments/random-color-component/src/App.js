import React, {useState, useEffect} from "react";
const axios = require("axios")

export default function App() {
  const [color, setColor] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => setColor(`#${res.data.new_color}`))
      .catch(err => console.log(err))
  }, [count])

  console.log(useEffect)


  return (
    <div>
    <h1 style={{color: color}}> These colors! </h1>
    <button onClick={() => setCount(prevState => prevState + 1)}> Change Color</button>
    </div>
  );

}
