import React from "react";
import memesData from "../memesData.js"

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getMemeImg(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url= memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value } = event.target
        setMeme(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })
    }



    return(
        <main className="main">
        <div className="form" action="index.html">

            <input 
            className ="form--input" 
            type="text" 
            placeholder="Top text"
            onChange={handleChange}
            value={meme.topText}
            name="topText"
            />
  
            <input 
            className ="form--input" 
            type="text" 
            placeholder="Bottom text"
            onChange={handleChange}
            value={meme.bottomText}
            name="bottomText"
            />

            <button onClick={getMemeImg} className="form--submit">Get a new meme image 🖼</button>
        </div>
        <div className="meme">
            
            <img className="form--randomImage" src={meme.randomImage} />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>

        </div>
        </main>

    )
}