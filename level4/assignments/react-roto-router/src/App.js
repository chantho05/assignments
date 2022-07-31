import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"


function App() {

  return (  
  <div>
    <Router>
        <nav style={{padding: 5, backgroundColor: "lightblue"}}>
            <Link to="/" style={{padding:5, textDecoration: "none", color:"red" }}>Home</Link>
            <Link to="/About" style={{padding:5, textDecoration: "none", color:"red" }}>About</Link>
            <Link to="/Services" style={{padding:5, textDecoration: "none", color:"red" }}>Services</Link>
        </nav>


        <div style={{textAlign: "center", height: 510}}>
        <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/About" element={< About/>} />
            <Route path="/Services" element={< Services/>} />
        </Routes>
        </div>
    </Router>
    <div style={{textAlign: "center"}}>
        <footer style={{padding: 5, backgroundColor: "lightblue"}}>
          <span style={{padding: 10}}>123@234.com</span>
          <span style={{padding: 10}}>(867)530-0989</span>
          <span style={{padding: 10}}>678 n this st. AZ 85122</span>
        </footer>

    </div>

  </div>

);
}

export default App;
