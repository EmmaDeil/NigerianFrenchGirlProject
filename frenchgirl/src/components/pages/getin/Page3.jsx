import React from 'react';
import AnimatedCounter from '../../AnimatedCounter';

const Page3 = () => {
   return (
      <div>
         <div className='container-fluid comment text-white py-5'>
            <h1 className='text-center'>Join Thousands of Happy Learners</h1>
            <p className='text-center'>Our impact speaks volumes.</p>
            <div className='row ratediv'>
               <div className='col'>
                  <h1><AnimatedCounter end={10000} />+</h1>
                  <p>Students actively engaging with our content.</p>
               </div>
               <div className='col'>
                  <h1><AnimatedCounter end={95} duration={1200} />%</h1>
                  <p>Satisfaction rate among users.</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Page3;