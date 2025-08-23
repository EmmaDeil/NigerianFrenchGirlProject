import React from 'react'
import Header from './components/pages/header.jsx'; 
import { useNavigate } from "react-router-dom";
import Page0 from './components/pages/getin/Page0.jsx';
import AnimatedCounter from './components/AnimatedCounter.jsx';


const Landingpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
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

<div className='container-fluid comment text-white py-5'>
            <h1 className='text-center anchor'>"</h1>
            <h1 className='text-center'><Page0 text="Learning French has never been this fun and engaging! My child looks forward to every lesson!" /></h1>
            <h1 className='text-center'><Page0 text="Amina A, Parent" /></h1>
            {/* <Page0
               text={["Text typing effect", "for your websites", "Happy coding!"]}
               typingSpeed={75}
               pauseDuration={1500}
               showCursor={true}
               cursorCharacter="|"
            /> */}
         </div>

   <div className='container midlevel'>
            <h1 className='text-center'>Frequently Asked Questions</h1>
            <p className='text-center'>Got questions? We've got answers!</p>
            <div className="accordion accordion-flush custom-accordion accordtop" id="accordionFlushExample">
               <div className="accordion-item">
                  <h2 className="accordion-header">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Can I switch plans later?
                     </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                     <div className="accordion-body">Absolutely! You can Upgrade or downgrade your plan at any time.</div>
                  </div>
               </div>
               <div className="accordion-item">
                  <h2 className="accordion-header">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Are there resources for adults?
                     </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                     <div className="accordion-body">Yes! We have courses and materials specifically for adults.</div>
                  </div>
               </div>
               <div className="accordion-item">
                  <h2 className="accordion-header">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        How do the AI tools work?
                     </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                     <div className="accordion-body">Input sentences and our AI generates French translations based on context.</div>
                  </div>
               </div>
               <div className="accordion-item">
                  <h2 className="accordion-header">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        Is there a trial period?
                     </button>
                  </h2>
                  <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                     <div className="accordion-body">Yes! We offer a 7-day free trial for new users to explore our offerings.</div>
                  </div>
               </div>
            </div>
         </div>

      <div className='container-fluid fmblue'>
         <h1 className='text-center text-white'><Page0 text="Ready to start Learning French?" /></h1>
         <h1 className='text-center text-white'><Page0 text="Join the vibrant community today and embrace the future of language education" /></h1>

         <button className='startedbtn' onClick={() => navigate("/users")}>Get Started Now</button>
      </div>
    </div>
  )
}

export default Landingpage;