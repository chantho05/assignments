import React, { useContext, useState } from "react";
import { AppContext } from "./Context";

const Card = () => {

    const {deleteFunction, saveEdit, list} = useContext(AppContext)
    const [editBoolean, setEditBoolean] = useState(false)
    const [editedContent, setEditedContent] = useState([])


    const toggleEdit = (e) => {
      e.preventDefault()
      setEditBoolean(!editBoolean)
   }

   const handleChange = (e) => {
       e.preventDefault()
       const {name, value} = e.target
       setEditedContent(prevState => { 
           return{
           ...prevState,
           [name] : value
       }
       })}

   const handleSubmit = (e) => {
       e.preventDefault()
       setEditBoolean(!editBoolean)
       saveEdit(e.target.button.value, editedContent)
       console.log(e.target.button.value)
   }

    const mappedList = list.map( (data, index) =>{
        return(
                
            <div key={index} value={1}>
            <form onSubmit={handleSubmit}>
                <h1>{data.title} </h1>
                <img src= {data.imgUrl} alt=""/>
                <h4>{data.description}</h4>
                <input onChange={handleChange} name="description" style={{display: editBoolean ? "block" : "none"}}/> 
                <button value={index} name={"button"} style={{display: editBoolean ? "block" : "none"}}>Save</button>               
            </form>
         

           <button value={index} onClick={deleteFunction}>Delete</button>
           <button style={{display: editBoolean ? "none" : "block"}}  onClick={toggleEdit}>Edit</button>
        </div>
        )
    })

 
    return(
        <div>
            {mappedList}
        </div>
    )
}

export default Card