import React from "react";
import { useContext } from "react";
import ThemeContext from "./themeContext";

function Footer() {
    const {footerColor} = useContext(ThemeContext)
    return (
        <div className={`${footerColor}-theme`}>
            <div className="footer">
            <h3>The amazing Footer</h3>

            </div>


        </div>
    )
}

export default Footer;