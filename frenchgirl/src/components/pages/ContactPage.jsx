import React from 'react'

const ContactPage = () => {
   return (
      <div>
         <div className='container-fluid position-relative'>
            <img src="/contactimg.jpg" alt="Contact Us" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
               <h1 className="display-4 fw-bold mb-3" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Contact Us</h1>
               <p className="lead" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>If you have any questions, feel free to reach out!</p>
            </div>
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: 'rgba(0,0,0,0.4)'}}></div>
         </div>
         <form>
            <div>
               <label htmlFor="name">Name:</label>
               <input type="text" id="name" name="name" required />
            </div>
            <div>
               <label htmlFor="email">Email:</label>
               <input type="email" id="email" name="email" required />
            </div>
            <div>
               <label htmlFor="message">Message:</label>
               <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
         </form>
      </div>
   )
}

export default ContactPage;