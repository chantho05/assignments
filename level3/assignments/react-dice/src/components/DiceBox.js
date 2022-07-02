import React, { useState } from "react"


export default function DiceBox(props) {
    return(
        <div className="diceContainer">
            <div className="diceBox">
                <h1 className="diceBox--randomNumber">{props.dice}</h1>
            </div>
        </div>
    )
}