import React from "react"

export default function Navbar (){
    return (
        <nav className="navbar">
            <h1 className="navbar--title">Start Bootstrap</h1>
            <ul className="navbar--list">
                <li className="navbar--listItem"><a className="navbar--link"href="index.html">HOME</a></li>
                <li className="navbar--listItem"><a className="navbar--link"href="index.html">ABOUT</a></li>
                <li className="navbar--listItem"><a className="navbar--link"href="index.html">SAMPLE POST</a></li>
                <li className="navbar--listItem"><a className="navbar--link"href="index.html">CONTACT</a></li>    
            </ul>
        </nav>
    )
}