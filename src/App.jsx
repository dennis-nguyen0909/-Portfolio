import React from "react"
import { BrowserRouter } from "react-router-dom"
import Hero from "./components/Hero"
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import FeedsBack from './components/FeedsBack'
import Loader from './components/Loader'
import Works from './components/Works'
import Tech from './components/Tech'
import Experience from './components/Experience'
import StarsCanvas from "./components/canvas/Stars"
const App = () =>{

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <FeedsBack />
        <div className="relative z-0">
            <Contact />
            <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
