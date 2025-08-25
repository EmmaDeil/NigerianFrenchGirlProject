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
        <RotatingText texts={['React', 'Bits', 'Is', 'Cool!']} />
        {/* <RotatingText
          texts={['React', 'Bits', 'Is', 'Cool!']}
          mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        /> */}
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
          <button className='justify-content-end bg-black text-white topbtn' onClick={() => setShowModal(true)}>Start Learning</button>
        </div>
      </nav>
      {showModal && <LoginForm onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default Navbar;