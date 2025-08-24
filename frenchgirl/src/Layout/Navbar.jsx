import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Users from '../components/pages/users';
import { useNavigate } from "react-router-dom";
import LoginForm from '../Forms/LoginForm.jsx';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=''>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="vite.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            The Nigerian French Girl
          </Link>
        <button className='justify-content-end bg-black text-white topbtn' onClick={() => setShowModal(true)}>Start Learning</button>
        </div>
      </nav>
      {showModal && <LoginForm onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default Navbar;