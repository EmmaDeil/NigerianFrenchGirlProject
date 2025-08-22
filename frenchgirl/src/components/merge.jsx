import React from 'react'
import { useNavigate } from "react-router-dom";

export const Merge = () => {
   const navigate = useNavigate();
  return (
    <div>
       <div className='container-fluid fmblue'>
         <h1 className='text-center text-white'>Ready to start Learning French?</h1>
         <h1 className='text-center text-white'>Join the vibrant community today and embrace the future of language education</h1>

         <button className='startedbtn' onClick={() => navigate("/users")}>Get Started Now</button>
      </div>
    </div>
  )
}

export default Merge;
