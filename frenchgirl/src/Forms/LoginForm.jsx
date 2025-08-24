import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';

const LoginForm = () => {
   const [showModal, setShowModal] = useState(true);
   const [showSignup, setShowSignup] = useState(false);

   return (
      <div>
         {showModal && (
            <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.3)', transition: 'background 0.3s' }}>
               <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content" style={{ transition: 'all 0.3s' }}>
                     <div className="modal-header bg-black text-white">
                        <h5 className="modal-title">{showSignup ? 'Sign Up' : 'Login Form'}</h5>
                     </div>
                     <div className="modal-body">
                        <div style={{ transition: 'opacity 0.3s' }}>
                           {showSignup ? (
                              <SignupForm onSwitch={() => setShowSignup(false)} />
                           ) : (
                              <form action="" method="post" className="login-form my-3">
                                 <p>Don't have an account yet? <button type="button" className="btn btn-link upbtn p-0" onClick={() => setShowSignup(true)}>Sign Up</button></p>
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
                           )}
                        </div>
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

export default LoginForm;