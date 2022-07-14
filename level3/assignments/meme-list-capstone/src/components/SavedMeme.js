import React from "react";

export default function SavedMeme(){
    function saveBtn () {
        console.log("clicked")
    }

    function deleteBtn () {
        console.log("clicked")
    }
    return(
        <div>
            <h2>Saved meme's</h2>
            <button className="form--delete" onClick={deleteBtn}>Delete meme</button>
            <button className="form--save" onClick={saveBtn}>Save meme</button>
        </div>
    )
}