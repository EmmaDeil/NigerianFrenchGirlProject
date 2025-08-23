import React from 'react'
import Page0 from './Page0';

const Page4 = () => {
   return (
      <div className='mb-2'>
         <div className='row container-fluid mt-3'>
            <div className='col'>
               <div className="card mb-3 steps">
                  <img src="/img1.avif" className="card-img-top" alt="..." style={{ width: '100%', height: '390px' }} />
                  <div className="card-body" style={{ padding: '20px' }}>
                     <h5 className="card-title">Step 1: Choose Your Path</h5>
                     <p className="card-text">Select from our diverse lessons tailored for all ages.</p>
                     <div className="card-img-overlay">1</div>
                     {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                  </div>
               </div>
            </div>
            <div className='col'>
               <div className="card mb-3 steps">
                  <img src="/img2.avif" className="card-img-top" alt="..." style={{ width: '100%', height: '460px' }} />
                  <div className="card-body" style={{ padding: '20px' }}>
                     <h5 className="card-title">Step 2: Engage with Interactive Content</h5>
                     <p className="card-text">Enjoy videos, games, and quizzes designed to reinforce learning in a fun way.</p>
                     <div className="card-img-overlay">2</div>
                     {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                  </div>
               </div>
            </div>
            <div className='col'>
               <div className="card mb-3 steps">
                  <img src="/img3.avif" className="card-img-top" alt="..." style={{ width: '100%', height: '520px' }} />
                  <div className="card-body" style={{ padding: '20px' }}>
                     <h5 className="card-title">Step 3: Track Your Progress</h5>
                     <p className="card-text">Use our dashboard to monitor your learning journey and celebrate your achievements.</p>
                     <div className="card-img-overlay">3</div>
                     {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                  </div>
               </div>
            </div>
         </div>

      <div className='text-center' style={{backgroundColor: 'hsl(236.44,60.82%,38.04%)', padding: '50px 0', borderRadius: '0', height: '500px', justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '50px'}}>
         <h1 className='text-black '><Page0 text={"Features That Enhance Your Learning Experience"}/></h1>
         </div>
         <div className='container-fluid mt-2'>
            <div className='row' style={{height: '300px', marginTop: '20px'}}>
               <div className='col-6'>
                  <h3>Dynamic Learning Modules</h3>
                  <ul>
                     <li>Engaging animated lessons for kids.</li>
                     <li>Comprehensive resources for beginners.</li>
                     <li>Profressional-level materials for advanced learners.</li>
                  </ul>
                  <h1>Explore All Features <a href="#">==</a></h1>
               </div>
               <div className='col-6'>
                  <img src="/img4.avif" alt="" style={{height: '300px', width: '600px', borderRadius: '20px'}} />
               </div>
            </div>
            <div className='row' style={{height: '300px', marginTop: '20px'}}>
               <div className='col-6'>
                  <img src="/img5.avif" alt="" style={{height: '300px', width: '600px', borderRadius: '20px'}} />
               </div>
               <div className='col-6'>
                  <h3>AI-Powered Tools</h3>
                  <ul>
                     <li>Context Translator for personalized learning.</li>
                     <li>Voice-to-Voice Translation for real conversations.</li>
                     <li>Progress tracking for both kids and parents.</li>
                  </ul>
                  <h1>Explore All Features <a href="#">==</a></h1>
               </div>
            </div>
            </div>
      </div>
   )
}

export default Page4;