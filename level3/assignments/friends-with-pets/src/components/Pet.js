
import React from 'react'

export default function Pet(props) {
    return (
        <div>

        <h2>Name:  </h2>
        <h4>
            {props.name}
            </h4>
        <h2>Breed:</h2>
        <h4>
            {props.breed}
            </h4>
            
      </div>
    )
}