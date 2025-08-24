import { useState } from 'react'
// import viteLogo from '/vite.svg' change the favicon here
import './App.css'
import {Routes, Route } from "react-router-dom";
import Navbar from './Layout/Navbar.jsx'
import Footer from './Layout/Footer.jsx'
import Users from './components/pages/users.jsx';
import Landingpage from './Layout/Landingpage.jsx';
import NotFound from './Layout/NotFound.jsx';
import Careers from './components/pages/Careers.jsx';
import ContactPage from './components/pages/ContactPage.jsx';
import LoginForm from './Forms/LoginForm.jsx';

function App() {
  return (
    <>
      <Routes>
        {/* Users route without navbar/footer */}
        <Route path="/users" element={<Users />} />
        
        {/* All other routes with navbar/footer */}
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </>
  )
}

export default App;
