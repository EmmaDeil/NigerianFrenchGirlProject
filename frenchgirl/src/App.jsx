import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inner from './components/Inner'
import Midlevel from './components/Midlevel.jsx'


function App() {
  return (
    <>
      <Navbar />
      <Midlevel />
      <Inner />
      {/* Add your routes/components here if needed */}
      <Footer />
    </>
  )
}

export default App;
