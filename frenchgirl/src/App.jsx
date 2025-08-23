import { useState } from 'react'
// import viteLogo from '/vite.svg' change the favicon here
import './App.css'
import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Users from './components/pages/users.jsx';
import Landingpage from './Landingpage.jsx';
import NotFound from './components/pages/NotFound.jsx';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Example: Home route */}
        <Route path="/" element={<Landingpage />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
