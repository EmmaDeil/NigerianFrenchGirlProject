import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Users from '../components/pages/users';
import { useNavigate } from "react-router-dom";
import LoginForm from '../Forms/LoginForm.jsx';
import RotatingText from '../Utils/RotatingText.jsx';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className='text-center mt-2 mb-2'>
        <RotatingText 
          texts={['React', 'Bits', 'Is', 'Cool!']} 
          rotationInterval={2000}
          className="fw-bold text-primary"
        />
      </div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="vite.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            The Nigerian French Girl
          </Link>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/library">E-Library</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/community">Community</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
            </li>
          </ul>
          <button className='justify-content-end bg-black text-white topbtn py-2 px-3' onClick={() => setShowModal(true)}>Start Learning</button>
        </div>
      </nav>
      {showModal && <LoginForm onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default Navbar;