import React from "react"

export default function Card(props) {

    // - Change the background color of your card depending on the `timeToGo` property.
// - Give each card 1, 2, or 3 dollar signs (`$`) depending on if it's less than $500, 
// less than $1000, or more than $1000

    let priceRating 

    if (props.cards.price < 500) {
        priceRating = "$"
    }else if(props.cards.price < 1000) {
        priceRating = "$$"
    }else {
        priceRating = "$$$"
    }

    return (
        <main className="main">
            <div className="main--cardContainer">
                <div className="main--card">
                    <img className="main--cardImage"src={props.cards.img} />
                </div>
                 <div className="main--cardInformation">
                  {priceRating && <div className="priceRate"> {priceRating} </div> }
                        <h3 className="main--cardLocation">Location: {props.cards.place}</h3>
                    <h4 className="main--cardBest">Best time to go: {props.cards.timeToGo}</h4>
                    <h4 className="main--cardPrice">Price: ${props.cards.price}</h4>
                    
                </div>
               
            </div>


        </main>
    )
}


