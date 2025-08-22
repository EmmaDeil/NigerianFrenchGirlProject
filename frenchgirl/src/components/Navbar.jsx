import React from 'react'
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=''>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="vite.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            The Nigerian French Girl
          </Link>
        <button className='justify-content-end bg-black text-white topbtn' onClick={() => navigate("/users")}>Start Learning</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;