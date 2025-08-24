import React, { useState } from 'react';


const SignupForm = ({ onSwitch }) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div>
      {showModal && (
        <form className="signup-form my-3">
          <h5 className="mb-3">Sign Up</h5>
          <div className='mb-2 dform'>
            <label htmlFor="signupEmail">Email Address:</label><br />
            <input type="email" id="signupEmail" name="signupEmail" placeholder='Enter your email' required />
      </div>
      <div className='mb-2 dform'>
        <label htmlFor="signupPassword">Password:</label><br />
        <input type="password" id="signupPassword" name="signupPassword" placeholder='Create a password' required />
      </div>
      <div className='mb-2 dform'>
        <label htmlFor="signupConfirm">Confirm Password:</label><br />
        <input type="password" id="signupConfirm" name="signupConfirm" placeholder='Confirm your password' required />
      </div>
      <button type="submit" className="btn btn-success loginbtn">Sign Up</button>
      <p className="mt-3">Already have an account? <button type="button" className="btn btn-link p-0" onClick={onSwitch}>Login</button></p>
    </form>
      )}
    </div>
  );
};

export default SignupForm;
