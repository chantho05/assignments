import React from "react";
import Pet from "./Pet"

export default function Friend(props) {
    const pets = props.pets.map((pet, index) => <Pet key={index} name={pet.name} breed={pet.breed}/>)
    return (
        <div>
           Name: <h1>{props.name}</h1>
            Age: <h3>{props.age}</h3>
            {pets}
            <hr></hr>
    

            
        </div>
    )
}