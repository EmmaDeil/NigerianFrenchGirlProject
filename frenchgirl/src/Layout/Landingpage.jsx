import React from 'react'
import Header from './Header.jsx';
import { useNavigate } from "react-router-dom";
import TextType from '../Utils/TextType.jsx';
import AnimatedCounter from '../Utils/AnimatedCounter.jsx';


const Landingpage = () => {
   const navigate = useNavigate();
   return (
      <div>
         <Header />
         <div className='container-fluid'>
            <div className='row mt-5'>
               <div className='col-12'>
                  <h5 className='text-center' style={{color: 'black', marginTop: '20px', fontSize: '1.9rem'}}>Trusted by Students and Educators Across Africa.</h5>
                  <img src="/partners.png" alt="" style={{ width: '100%', height: 'auto', margin: '20px 0' }} />
               </div>
            </div>
         </div>
         <div className='mb-2'>
            <div className='row container-fluid mt-3 g-3'>
               <div className='col-lg-4 col-md-6 col-sm-12'>
                  <div className="card mb-3 steps h-100">
                     <img src="/img1.avif" className="card-img-top" alt="..." style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                     <div className="card-body d-flex flex-column" style={{ padding: '20px' }}>
                        <h5 className="card-title">Step 1: Choose Your Path</h5>
                        <p className="card-text flex-grow-1">Select from our diverse lessons tailored for all ages.</p>
                        <div className="card-img-overlay">1</div>
                        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                     </div>
                  </div>
               </div>
               <div className='col-lg-4 col-md-6 col-sm-12'>
                  <div className="card mb-3 steps h-100">
                     <img src="/img2.avif" className="card-img-top" alt="..." style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                     <div className="card-body d-flex flex-column" style={{ padding: '20px' }}>
                        <h5 className="card-title">Step 2: Engage with Interactive Content</h5>
                        <p className="card-text flex-grow-1">Enjoy videos, games, and quizzes designed to reinforce learning in a fun way.</p>
                        <div className="card-img-overlay">2</div>
                        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                     </div>
                  </div>
               </div>
               <div className='col-lg-4 col-md-12 col-sm-12'>
                  <div className="card mb-3 steps h-100">
                     <img src="/img3.avif" className="card-img-top" alt="..." style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                     <div className="card-body d-flex flex-column" style={{ padding: '20px' }}>
                        <h5 className="card-title">Step 3: Track Your Progress</h5>
                        <p className="card-text flex-grow-1">Use our dashboard to monitor your learning journey and celebrate your achievements.</p>
                        <div className="card-img-overlay">3</div>
                        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                     </div>
                  </div>
               </div>
            </div>


            <div className='text-center' style={{background: 'linear-gradient(135deg, darkblue 30%, white 100%)', padding: '50px 20px', borderRadius: '0', minHeight: '300px', justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '50px' }}>
               <h1 className='text-black' style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}><TextType text={"Features That Enhance Your Learning Experience"} /></h1>
            </div>


            <div className='container-fluid mt-2'>
               <div className='row align-items-center' style={{ minHeight: '300px', marginTop: '20px' }}>
                  <div className='col-lg-6 col-md-12 order-lg-1 order-2'>
                     <h3 className='' style={{ marginBottom: '30px', marginTop: '10px' }}>Dynamic Learning Modules</h3>
                     <ul className="thelist">
                        <li><i className="bi bi-caret-right"></i>  Engaging animated lessons for kids.</li>
                        <li><i className="bi bi-caret-right"></i>  Comprehensive resources for beginners.</li>
                        <li><i className="bi bi-caret-right"></i>  Professional-level materials for advanced learners.</li>
                     </ul>
                     <p style={{ marginBottom: '0', marginTop: '15px' }}>Explore All Features <a href="#"><i className="bi bi-arrow-right" style={{ fontSize: 'larger', marginLeft: '5px' }}></i></a></p>
                  </div>
                  <div className='col-lg-6 col-md-12 order-lg-2 order-1'>
                     <img src="/img4.avif" alt="" className="img-fluid" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '20px' }} />
                  </div>
               </div>
               <div className='row align-items-center' style={{ minHeight: '300px', marginTop: '20px' }}>
                  <div className='col-lg-6 col-md-12'>
                     <img src="/img5.avif" alt="" className="img-fluid" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '20px' }} />
                  </div>
                  <div className='col-lg-6 col-md-12'>
                     <h3 className='' style={{ marginBottom: '30px', marginTop: '10px' }}>AI-Powered Tools</h3>
                     <ul className='thelist'>
                        <li><i className="bi bi-caret-right"></i>  Context Translator for personalized learning.</li>
                        <li><i className="bi bi-caret-right"></i>  Voice-to-Voice Translation for real conversations.</li>
                        <li><i className="bi bi-caret-right"></i>  Progress tracking for both kids and parents.</li>
                     </ul>
                     <p style={{ marginBottom: '0', marginTop: '15px' }}>Explore All Features <a href="#"><i className="bi bi-arrow-right" style={{ fontSize: 'larger', marginLeft: '5px' }}></i></a></p>
                  </div>
               </div>
            </div>

            <div className='text-center' style={{ background: 'linear-gradient(135deg, darkblue 30%, white 100%)', padding: '60px 20px', borderRadius: '0', minHeight: '200px', justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '50px' }}>
               <h1 className='text-black' style={{ fontSize: 'clamp(2rem, 4vw, 5.5rem)', maxWidth: '90%' }}><TextType text={["Experience the Power of Language Learning", "Empower yourself with unique tools and resources."]} /></h1>
            </div>
         </div>

         <div className='container-fluid py-5'>
            <div className="row">
               <div className="col-4">
                  <div className="card" style={{ borderRadius: '20px' }}>
                     <img src="/img6.avif" className="card-img" alt="..." style={{ height: '300px', width: '100%', borderRadius: '20px' }} />
                     <div className="card-img-overlay" >
                        <h5 className="card-title text-dark">Interactive Video Lessons</h5>
                        <p className="card-text text-dark">A blend of animation and education that captivates young minds.</p>
                        {/* <p className="card-text"><small>Last updated 3 mins ago</small></p> */}
                     </div>
                  </div>
               </div>
               <div className="col-8">
                  <div className="card" style={{ borderRadius: '20px' }}>
                     <img src="/img7.avif" className="card-img" alt="..." style={{ height: '300px', width: '100%', borderRadius: '20px' }} />
                     <div className="card-img-overlay" >
                        <h5 className="card-title text-dark">Personalized Learning Paths</h5>
                        <p className="card-text text-dark">Tailored lessons that adapt to each child's unique learning style.</p>
                        {/* <p className="card-text"><small>Last updated 3 mins ago</small></p> */}
                     </div>
                  </div>
               </div>
            </div>
            <div className="row mt-3">
               <div className="col-8">
                  <div className="card" style={{ borderRadius: '20px' }}>
                     <img src="/img8.avif" className="card-img" alt="..." style={{ height: '300px', width: '100%', borderRadius: '20px' }} />
                     <div className="card-img-overlay" >
                        <h5 className="card-title text-white">Community Support</h5>
                        <p className="card-text text-white">Engage with our vibrant community of learners and educators for support and motivation and share experiences.</p>
                        {/* <p className="card-text"><small>Last updated 3 mins ago</small></p> */}
                     </div>
                  </div>
               </div>
               <div className="col-4">
                  <div className="card" style={{ borderRadius: '20px' }}>
                     <img src="/img9.avif" className="card-img" alt="..." style={{ height: '300px', width: '100%', borderRadius: '20px' }} />
                     <div className="card-img-overlay" >
                        <h5 className="card-title text-white">Innovative AI Tools</h5>
                        <p className="card-text text-white">Make learning efficient and tailored to your individual needs.</p>
                        {/* <p className="card-text"><small>Last updated 3 mins ago</small></p> */}
                     </div>
                  </div>
               </div>
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
            <h1 className='text-center'><TextType text={["Learning French has never been this fun and engaging! My child looks forward to every lesson!"]} /></h1>
            <h1 className='text-center'><TextType text={["Amina A, Parent"]} /></h1>
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

         <div className='container-fluid fmblue' style={{ backgroundColor: 'hsl(236.44,60.82%,38.04%)' }}>
            <h1 className='text-center text-white'><TextType text="Ready to start Learning French?" /></h1>
            <h1 className='text-center text-white'><TextType text="Join the vibrant community today and embrace the future of language education" /></h1>

            <button className='startedbtn' onClick={() => navigate("/users")}>Get Started Now</button>
         </div>
               
         <div style={{ height: 'auto'}}>
         <div className='container text-center mt-5'>
            <h1 style={{ lineHeight: '50px', color: 'hsl(236.44,60.82%,38.04%)' }}>Affordable Learning Plans</h1>
            <h6>Choose the perfect plan for your learning journey.</h6>
            </div>
            <div>
               <div className='text-center mt-4'>
                  <button className='planbtn' onClick={() => navigate("/community")}>View Plans</button>
               </div>
            </div>
         </div>
            <div className='row container-fluid mt-3 g-3'>
               <div className='col-md-4'>
                  <div className='card'>
                     <div className='card-body'>
                        <h5 className='card-title'>Basic Plan</h5>
                        <h4 className='card-text'>N9.99/month</h4>
                        <p className='card-text'>Access to basic courses and materials.</p>
                        <button className='btn btn-outline-primary' onClick={() => navigate("/users")}>Choose Plan</button>
                     </div>
                  </div>
               </div>
               <div className='col-md-4'>
                  <div className='card'>
                     <div className='card-body'>
                        <h5 className='card-title'>Standard Plan</h5>
                        <h4 className='card-text'>N19.99/month</h4>
                        <p className='card-text'>Access to all courses and materials.</p>
                        <button className='btn btn-primary' onClick={() => navigate("/users")}>Choose Plan</button>
                     </div>
                  </div>
               </div>
               <div className='col-md-4'>
                  <div className='card'>
                     <div className='card-body'>
                        <h5 className='card-title'>Premium Plan</h5>
                        <h4 className='card-text'>N29.99/month</h4>
                        <p className='card-text'>Access to all courses, materials, and personalized support.</p>
                        <button className='btn btn-secondary' onClick={() => navigate("/users")}>Choose Plan</button>
                     </div>
                  </div>
               </div>
            </div>
      </div>
   )
}

export default Landingpage;