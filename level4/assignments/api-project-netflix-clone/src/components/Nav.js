import React from "react";
import { useState, useEffect } from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       setShow(true);
  //     } else setShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  return (
    <div className={`nav ${show && "nav--black"}`}>
      <Link to="/Home">
        <img
          className="nav--logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </Link>
      <Link to="/Login">
        <img
          className="nav--avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User Logo"
        />
      </Link>

      <Link to="/Logout">
        <span className="nav--logout"> Logout </span>
      </Link>
    </div>
  );
}

export default Nav;
