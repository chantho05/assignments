import React from "react"

export default function Footer (){
    return (
        <footer className="footer">
            <button className="footer--button">Submit</button>
        <div className="footer--hr"></div>
        <div className="footer--icons">
            <ul className="footer--list">
                <li className="footer--listItem">Twitter</li>
                <li className="footer--listItem">Facebook</li>
                <li className="footer--listItem">Github</li>
            </ul>
            <div>
                <h3 className="footer--end">Copyright © Your Website 2022 </h3>
            </div>
        </div>
        </footer>
    )
}