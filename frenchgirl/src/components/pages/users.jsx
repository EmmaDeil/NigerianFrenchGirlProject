import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import SignupForm from '../../Forms/SignupForm';
import LoginForm from '../../Forms/LoginForm';

const Users = () => {
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();
   const mode = searchParams.get('mode') || 'login';
   const [showSignup, setShowSignup] = useState(mode === 'signup');

   useEffect(() => {
      setShowSignup(mode === 'signup');
   }, [mode]);

   const handleClose = () => {
      navigate('/');
   };

   return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
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
                              <LoginForm onSwitch={() => setShowSignup(true)} />
                           )}
                        </div>
                     </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" onClick={handleClose}>Back to Home</button>
                  </div>
               </div>
            </div>
         </div>
   );
};

export default Users;