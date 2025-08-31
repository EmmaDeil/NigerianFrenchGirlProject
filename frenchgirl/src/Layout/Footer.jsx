import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";

const Footer = () => {

   const currentYear = new Date().getFullYear();
   const [showSocialDropdown, setShowSocialDropdown] = useState(false);

   return (
      <div>
         <footer style={{ backgroundColor: '#1d4fd7', padding: '40px 0', marginTop: '20px', color: 'white' }}>
            <div className="container-fluid">
               <div className="row footdiv">
                  <div className="col">
                     <a className="navbar-brand" href="#">
                        <img src="/logo.png" alt="foot" width="30" height="24" className="d-inline-block align-text-top" /><strong>The Nigerian French Girl</strong>

                     </a>
                     <p>Innovative language learning merging education and technology for a  brighter future.</p>
                     <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
                  </div>
                  <div className="col">
                     <h5>Learn More</h5>
                     <ul className="other-links">
                        <li>
                           <Link to="/">Home</Link>
                        </li>
                        <li>
                           <Link to="/learn-french">Learn French</Link>
                        </li>
                        <li>
                           <Link to="/about">About Us</Link>
                        </li>
                        <li>
                           <Link to="/careers">Careers</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="col">
                     <h5>Engage With us</h5>
                     {/* <p>Stay connected through our social media channels.</p> */}
                     <ul className="social-media-links">
                        <li className="dropdown">
                           <button 
                              className="btn btn-link p-0 text-start" 
                              onClick={() => setShowSocialDropdown(!showSocialDropdown)}
                              style={{color: 'inherit', textDecoration: 'none'}}
                           >
                              Social Media <i className={`bi bi-chevron-${showSocialDropdown ? 'up' : 'down'}`}></i>
                           </button>
                           {showSocialDropdown && (
                              <ul className="dropdown-menu show position-static mt-2" style={{backgroundColor: 'transparent', border: 'none'}}>
                                 <li><a href="https://facebook.com/nigerifrenchgirl" target="_blank" rel="noopener noreferrer" className="dropdown-item">Facebook</a></li>
                                 <li><a href="https://twitter.com/nigerifrenchgirl" target="_blank" rel="noopener noreferrer" className="dropdown-item">Twitter</a></li>
                                 <li><a href="https://instagram.com/nigerifrenchgirl" target="_blank" rel="noopener noreferrer" className="dropdown-item">Instagram</a></li>
                                 <li><a href="https://youtube.com/nigerifrenchgirl" target="_blank" rel="noopener noreferrer" className="dropdown-item">YouTube</a></li>
                                 <li><a href="https://linkedin.com/company/nigerifrenchgirl" target="_blank" rel="noopener noreferrer" className="dropdown-item">LinkedIn</a></li>
                              </ul>
                           )}
                        </li>
                        <li>
                           <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                           <Link to="/collaborate">Collaborate</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="col">
                     {/* <h5>Support</h5>
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
                     </ul> */}
                     <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Learning Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-smooth">French Grammar Guide</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Vocabulary Builder</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Pronunciation Guide</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Cultural Guide</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Success Stories</a></li>
            </ul>
                  </div>
               <div className='col'>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 mb-2">
                <Mail className="w-5 h-5 text-white/80" />
                <span className="text-white/80"> hello@frenchflow.com</span>
              </div>
              <div className="flex items-center space-x-3 mb-2">
                <Phone className="w-5 h-5 text-white/80" />
                <span className="text-white/80"> +234 800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 mb-2">
                <MapPin className="w-5 h-5 text-white/80" />
                <span className="text-white/80"> Lagos, Nigeria</span>
              </div>
            </div>
               <h5>Join our newsletter</h5>
               <p>Stay updated with the latest news and offers from us.</p>
               <input type="email" placeholder="Enter your email" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', onFocus: { border: '1px solid #262d9c' } }}/><br />
               <button className="btn btn-primary" style={{ marginTop: '5px', width: '100%', backgroundColor: '#262d9c' }}>Subscribe</button>
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
