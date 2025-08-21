import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            The Nigerian French Girl
          </a>
        <button className='justify-content-end bg-black text-white topbtn'>Start Learning</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;