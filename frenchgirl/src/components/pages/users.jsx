import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
   const [showModal, setShowModal] = useState(true);

   return (
      <div>
         <h1 className='text-center'>Users Page</h1>
         {showModal && (
            <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.3)' }}>
               <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                     <div className="modal-header bg-black text-white">
                        {/* <img src="/character.jpg" alt="Example" className='img-fluid' /> */}
                        <h5 className="modal-title">Login Form</h5>
                     </div>
                     <div className="modal-body">
                        <form action="" method="post" className="login-form my-3">
                           <p>Don't have an account yet? <a href="#" className="upbtn">Sign Up</a></p>
                           <div className='mb-2 dform'>
                              <label htmlFor="username">Email Address:</label><br />
                              <input type="email" id="username" name="username" placeholder='Enter your email' required />
                           </div>
                           <div className='mb-2 dform'>
                              <div className='d-flex justify-content-between'>
                                 <label htmlFor="password">Password:</label><br />
                                 <a href="#">Forgot Password?</a>
                              </div>
                              <input type="password" id="password" name="password" placeholder='Enter your password' required />
                           </div>
                           <div className='d-flex align-items-center'>
                              <input type="checkbox" name="rememberMe" id="rememberMe" />
                              <label htmlFor="rememberMe">Remember Me</label>
                           </div><br />
                           <button type="submit" className="btn btn-primary loginbtn">Login</button>
                        </form>
                     </div>
                     <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Users;