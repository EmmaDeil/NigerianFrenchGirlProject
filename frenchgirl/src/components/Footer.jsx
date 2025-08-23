import React from "react";

const Footer = () => {

   const currentYear = new Date().getFullYear();

   return (
      <div>
         <footer>
            <div className="container-fluid">
               <div className="row footdiv">
                  <div className="col">
                     <a className="navbar-brand" href="#">
                        <img src="/logo.png" alt="foot" width="30" height="24" className="d-inline-block align-text-top" /><strong>The Nigerian French Girl</strong>

                     </a>
                     <p>Innovative language learning merging education and technology for a  brighter future.</p>
                  </div>
                  <div className="col">
                     <h5>Learn More</h5>
                     <ul className="other-links">
                        <li>
                           <a href="#">Home</a>
                        </li>
                        <li>
                           <a href="#">Learn French</a>
                        </li>
                        <li>
                           <a href="#">About Us</a>
                        </li>
                        <li>
                           <a href="#">Careers</a>
                        </li>
                     </ul>
                  </div>
                  <div className="col">
                     <h5>Engage With us</h5>
                     {/* <p>Stay connected through our social media channels.</p> */}
                     <ul className="social-media-links">
                        <li>
                           <a href="#">Social Media</a>
                        </li>
                        <li>
                           <a href="#">Contact Us</a>
                        </li>
                        <li>
                           <a href="#">Collaborate</a>
                        </li>
                     </ul>
                  </div>
                  <div className="col">
                     <h5>Support</h5>
                     <ul className="other-links">
                        <li><a href="#">FAQs</a></li>
                        <li>
                           <a href="#">Help Center</a>
                        </li>
                        <li>
                           <a href="#">Terms of Service</a>
                        </li>
                        <li>
                           <a href="#">Privacy Policy</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <hr />
            </div>
            <p className="text-center">© {currentYear} The Nigerian French Girl. All rights reserved.</p>
         </footer>
      </div>
   );
};

export default Footer;
