import React, { useContext } from "react";
import { AppContext } from "./Context";


const Input = () => {

    const {inputSubmit, inputChange} = useContext(AppContext)

    return(
        <div className="inputDiv">
           <form className="inputForm" id="inputForm">
            <input placeholder="title" name="title" onChange={inputChange}/>
            <input placeholder="Image Url" name="imgUrl" onChange={inputChange}/>
            <input placeholder="description" name="description" onChange={inputChange}/>
            <button type="button" onClick={inputSubmit}>Submit</button>
           </form>
        </div>
    )
}

export default Input