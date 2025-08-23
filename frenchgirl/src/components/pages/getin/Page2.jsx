import React from 'react'
import Page0 from './Page0';

const Page2 = () => {
   return (
      <div>
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
      </div>
   )
}

export default Page2;