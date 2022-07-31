import React from 'react' //Step 1
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; //Step 2
import Home from './components/Home.js' // Step 8
import About from "./components/About"
 
export default function App() { // Step 3
    return ( // Step 4
        <Router> {/*Step 5*/}

            <nav style={{margin: 10}}>
                <Link to="/" 
                style={{
                    padding:5, 
                    textDecoration: "none",
                    color: "Red"
                    
                    }}>
                    Home
                </Link>

                <Link to="/About" 
                style={{
                    padding:5,
                    textDecoration: "none",
                    color: "red",
                    
                    }}>
                    About
                </Link>

            </nav>

            <Routes> {/*Step 6*/}
                <Route path ="/" element={<Home />} /> {/*Step 7*/}
                <Route path ="/About" element={<About />} />
             </Routes> {/*Step 6*/}
        </Router> //Step 5
    ); //Step 4
  } //Step 3
