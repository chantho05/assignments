import React from "react";
import { useContext } from "react";
import ThemeContext from "./themeContext";

function Navbar(props) {
    const  {navColor, color} = useContext(ThemeContext)
    return (
    <nav className={`${navColor}-theme`}>
        <div className="navbar">
        <ul className="navbar--options">
            <li className="navbar--option"><h2>Home</h2></li>
            <li className="navbar--option"><h2>About</h2></li>
            <li className="navbar--option"><h2>Contact</h2></li>
        </ul>
        </div>
    </nav>
    )
}

export default Navbar