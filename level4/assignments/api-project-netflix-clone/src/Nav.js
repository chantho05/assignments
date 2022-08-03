import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img
        className="nav--logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav--avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User Logo"
      />
    </div>
  );
}

export default Nav;
