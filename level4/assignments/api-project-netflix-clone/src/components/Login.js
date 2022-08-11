import React from "react";
import { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(user);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked");
  }

  return (
    <div className="login">
      {/* <div className="background"> */}
      <img
        className="login--background"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/11f2f568-d6f9-4c75-a853-7116708b62c2/US-en-20220801-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="NetFlix background"
      />
      <div className="login--formContainer">
        <form className="login--form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="form--text"
            placeholder="Email address"
            name="email"
            onChange={handleChange}
            value={user.email}
          />

          <input
            type="password"
            className="form--text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={user.password}
          />

          <Link to="/Home">
            <button className="form--submit">Sign In</button>
          </Link>
        </form>
      </div>
      <div className="login--lower"></div>
    </div>
  );
}

export default Login;
