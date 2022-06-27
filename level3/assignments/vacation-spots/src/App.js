import React from "react"
import Card from "./components/Card"
import "./styles.css"
import data from "./data"
console.log(data)


export default function App() {
  const card = data.map(cards => <Card cards={cards}/>)
  return (
    <div>
    {card}
    </div>
  )
}
