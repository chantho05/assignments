import React, {useState} from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ThemeContext from "./components/themeContext";

function App() {

  const [color, setColor] = useState("light")
  const [navColor, setNavColor] = useState("nav")
  const [mainColor, setMainColor] = useState("main")
  const [footerColor, setFooterColor] = useState("footer")
  const [toggleColor, setToggleColor] = useState("dark")

  function toggleTheme () {
    setColor(prevState => prevState === "dark" ? "light" : "dark")
    setNavColor(prevState => prevState === "navDark" ? "nav" : "navDark")
    setMainColor(prevState => prevState === "mainDark" ? "light" : "mainDark")
    setFooterColor(prevState => prevState === "footerDark" ? "footer" : "footerDark")
    setToggleColor(prevState => prevState === "light" ? "dark" : "light")
  }


  return (
    <>
      <ThemeContext.Provider value={{
        color: color,
        navColor: navColor,
        mainColor: mainColor,
        footerColor: footerColor,
        toggleColor: toggleColor,
        toggleTheme: toggleTheme
      }}>

      <Navbar/>
      <Main />
      <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;





// light theme / dark theme

// Navbar, Footer, Main