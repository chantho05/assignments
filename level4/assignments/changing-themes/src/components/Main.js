import React from "react";
import { useContext } from "react";
import ThemeContext from "./themeContext";

function Main(props) {
    const {color, mainColor, toggleColor, toggleTheme} = useContext(ThemeContext)
    return (
        <div className={`${mainColor}-theme`}>
            <div className="main">
                
            <h1>Click the button to toggle the {`${color} theme`} theme!</h1>

            <button onClick={toggleTheme} className={`${toggleColor}-theme`}> Toggle Theme </button>
            </div>
        </div>
    )
}

export default Main