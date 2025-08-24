import { useState } from 'react'
// import viteLogo from '/vite.svg' change the favicon here
import './App.css'
import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Users from './components/pages/users.jsx';
import Landingpage from './Landingpage.jsx';
import NotFound from './components/pages/NotFound.jsx';
import Careers from './components/pages/Careers.jsx';
import ContactPage from './components/pages/ContactPage.jsx';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Example: Home route */}
        <Route path="/" element={<Landingpage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
