import React from 'react'
import Merge from './merge.jsx';
import Header from './pages/header.jsx';
import { useNavigate } from "react-router-dom";
import Page2 from './pages/getin/Page2.jsx';


const Midlevel = () => {
   const navigate = useNavigate();
   return (
      <div>
         <Header />
         <Page2 />
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
            <Merge />
      </div>
   )
}

export default Midlevel;
