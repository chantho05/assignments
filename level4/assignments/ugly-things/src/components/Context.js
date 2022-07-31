import React, {useState, useEffect} from "react";

const AppContext = React.createContext()
const axios = require('axios').default;


const ContextProvider = (props) => {


    const [input, setInput] = useState([])
    const [list, setList ] = useState([])


    function inputChange(e){
        e.preventDefault()
        const {name, value} = e.target
        setInput(prevState => {
            return{
                ...prevState,
                [name] : value
            }
        })
    }

    useEffect(()=> getRequest(), [])


    function inputSubmit(e){
        e.preventDefault()
        document.getElementById("inputForm").reset()
      
        axios.post("https://api.vschool.io/MichaelDavis/thing", input)
          .then(() => getRequest())
          .catch(error => console.log(error))
          setInput([])
      }

   
    function deleteFunction(e){
        e.preventDefault()
        axios.delete(`https://api.vschool.io/MichaelDavis/thing/${list[e.target.value]._id}`)  
        .then(() => getRequest())
        .catch(error=>console.log(error))
    }

    function saveEdit(eventValue, editedContent){

        axios.put(`https://api.vschool.io/MichaelDavis/thing/${list[eventValue]._id}`, editedContent)
        .then(() => getRequest())
        .catch(error=>console.log(error))
    }

    function getRequest(){
        axios.get("https://api.vschool.io/MichaelDavis/thing/")
        .then(responce =>{ 
        setList(responce.data)
        })
        .catch(error => console.log(error))
        
        
    }

    return(
<AppContext.Provider  value={{inputSubmit : inputSubmit, inputChange : inputChange, deleteFunction : deleteFunction, saveEdit : saveEdit, list : list }}>
   {props.children}
</AppContext.Provider>
    )
}

export {AppContext, ContextProvider}