import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Portfolio from './components/Portfolio';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
// import Footer from './components/Footer';

function App() {
  return (
    <>

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/alfredo-react-portfolio/" element={<About />} />
      <Route path="/alfredo-react-portfolio/about" element={<About />} />
      <Route path='/alfredo-react-portfolio/portfolio' element={<Portfolio />} />
      <Route path='/alfredo-react-portfolio/contact' element={<Contact />} />
      <Route path='/alfredo-react-portfolio/resume' element={<Resume />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
