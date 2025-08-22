import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Midlevel from './components/Midlevel.jsx'
import Users from './components/pages/users.jsx';
import NotFound from './components/pages/NotFound.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Example: Home route */}
        <Route path="/" element={<Midlevel />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
