import React from "react"
import data from "./data"
import "./styles.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import BlogList from "./components/BlogList"
import Footer from "./components/Footer"

export default function App(){
  console.log(data)
  const blog = data.map(blogs => <BlogList blogs={blogs} /> )
  return (
    <div>
      <Navbar />
      <Header />
      {blog}
      <Footer />
    </div>
    )
}