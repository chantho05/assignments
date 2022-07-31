import React from "react";
import {ContextProvider} from "./components/Context"
import Input from "./components/Input";
import Card from "./components/Card";

//This App is was an assignment to introduce us to React Context. I used a basic submit form and send it to an API set up by V School. Whenever changes are made to the list, my State changes in order to properly  display the desired list.

const App = (props) => {
   


    return(
      <>
        
        <ContextProvider>
           <Input/>
           <Card/>
        </ContextProvider>
      </>
    
    )
}

export default App