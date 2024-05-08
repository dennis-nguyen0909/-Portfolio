import React, { useState } from "react"
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
import { IntlProvider } from 'react-intl';
import en from './en.json'
import vi from './vi.json'
const App = () =>{
  const locale = 'en'; // Lấy ngôn ngữ của trình duyệt
  const [active,setActive]=useState(locale)
  
  const handleOnChange = ()=>{
    const newLocale = active === 'en' ?'vi':'en' 
    setActive(newLocale)
  }

  return (
<IntlProvider locale={active} messages={active === 'en' ? en : vi}>
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar activeLanguages={active} handleOnChange={handleOnChange} />
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
    </IntlProvider>
  )
}

export default App
