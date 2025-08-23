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
                  <h3 className='' style={{marginBottom: '30px', marginTop: '10px'}}>Dynamic Learning Modules</h3>
                  <ul className="thelist">
                     <li><i class="bi bi-caret-right"></i>  Engaging animated lessons for kids.</li>
                     <li><i class="bi bi-caret-right"></i>  Comprehensive resources for beginners.</li>
                     <li><i class="bi bi-caret-right"></i>  Professional-level materials for advanced learners.</li>
                  </ul>
                  <p style={{marginBottom: '0', marginTop: '15px'}}>Explore All Features <a href="#"><i className="bi bi-arrow-right"></i></a></p>
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
                  <h3 className='' style={{marginBottom: '30px', marginTop: '10px'}}>AI-Powered Tools</h3>
                  <ul className='thelist'>
                     <li><i className="bi bi-caret-right"></i>  Context Translator for personalized learning.</li>
                     <li><i className="bi bi-caret-right"></i>  Voice-to-Voice Translation for real conversations.</li>
                     <li><i className="bi bi-caret-right"></i>  Progress tracking for both kids and parents.</li>
                  </ul>
                  <p style={{marginBottom: '0', marginTop: '15px'}}>Explore All Features <a href="#"><i className="bi bi-arrow-right"></i></a></p>
               </div>
            </div>
            </div>

            <div className='text-center' style={{backgroundColor: 'hsl(236.44,60.82%,38.04%)', padding: '50px 0', borderRadius: '0', height: '300px', justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '50px'}}>
         <h1 className='text-black '><Page0 text={"Experience the Power of Language Learning"}/></h1>
         </div>

         <div className='text-center' style={{backgroundColor: 'hsl(236.44,60.82%,38.04%)', padding: '10px 0',width: 'auto', height: '300px', justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '10px'}}>
         <h3 className='text-center' style={{color: 'white'}}>Empower yourself with unique tools and resources.</h3>
         </div>
      </div>
   )
}

export default Page4;