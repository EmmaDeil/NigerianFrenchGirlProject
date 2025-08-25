import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='container-fluid' style={{display: 'flex', background: 'linear-gradient(135deg, darkblue 30%, white 100%)', justifyContent: 'center', alignItems: 'center', height: '600px'}}>
        <div className='header-text'style={{width: '70%'}}>
          <h1 style={{color: 'white', textAlign: 'center', fontSize: '5.5rem'}}>Welcome to the French Learning Platform</h1>
          <p style={{color: 'white', textAlign: 'center', fontSize: '1.5rem'}}>Your journey to fluency starts here</p>
        </div>
      </div>
    </div>
  )
}

export default Header;