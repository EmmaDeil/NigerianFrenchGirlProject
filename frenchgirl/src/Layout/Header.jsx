import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
   const navigate = useNavigate();
   
   const handleStartLearning = () => {
      navigate('/users?mode=login');
   };
   
   const handleJoinClub = () => {
      navigate('/users?mode=signup');
   };
   return (
      <div className="header-section position-relative">
         <div className='header-text position-absolute top-50 start-50 translate-middle text-center w-100' style={{zIndex:2}}>
            <h1 className='text-white'>Welcome to the French Learning Platform, Where Language Meets Innovation</h1>
            <p className='text-white'>Empowering the Next Generation of French Learners in Nigeria Through Technology and your journey to fluency starts here</p>
            <div className='header-actions mt-5'>
               <button className='justify-content-end bg-black text-white topbtn me-3' onClick={handleStartLearning}>Start Learning</button>
               <button className='btn btn-outline-light' onClick={handleJoinClub}>Join The Club</button>
            </div>
         </div>
         <div className='container-fluid'>
            <div className='headerimg position-relative'>
               <div className="carousel-overlay position-absolute top-0 start-0 w-100 h-100" style={{zIndex:1}}></div>
               <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <img src="./land1.avif" className="d-block w-100 img-fluid carousel-img-fade" alt="Header"/>
                     </div>
                     <div className="carousel-item">
                        {/* <img src="./character.jpg" className="d-block w-100 img-fluid carousel-img-fade" alt="Header"/> */}
                     </div>
                     <div className="carousel-item">
                        {/* <img src="./character.jpg" className="d-block w-100 img-fluid carousel-img-fade" alt="Header"/> */}
                     </div>
                     <div className="carousel-item">
                        {/* <img src="./character.jpg" className="d-block w-100 img-fluid carousel-img-fade" alt="Header"/> */}
                     </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="visually-hidden">Next</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header;