import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <section className="footer">

      <div className="box-container">

         <div className="box">
            <h3 className="h3-link">our info</h3>
            <a href="https://goo.gl/maps/nwqCFEoekM7s3FJ2A" className="link"> &#x21aa; <span>India</span></a>
            <a href="https://goo.gl/maps/r3oSCoMUpr9RpK976" className="link"> &#x21aa; <span>Sliet</span></a>
            <a href="http://academic.sliet.ac.in/bacholar-of-engineering/" className="link"> &#x21aa; <span>Programmes</span></a>
            <a href="http://library.sliet.ac.in/e-resources/e-books/" className="link"> &#x21aa; <span>E-Lib</span></a>
            <a href="/AboutPage" className="link"> &#x21aa; <span>Webiste Team</span></a>
         </div>

         <div className="box">
            <h3 className="h3-link">quick links</h3>
            <a href="/Home" className="link"> &#x21aa; <span> Home</span></a>
            <a href="/Subject" className="link"> &#x21aa; <span> Subject</span></a>
            <a href="/Leet" className="link"> &#x21aa; <span> Leet</span></a>
            <a href="/AboutPage" className="link"> &#x21aa; <span> About</span></a>
            <a href="/Contact" className="link"> &#x21aa; <span> Contact</span></a>
         </div>

         <div className="box">
            <h3 className="h3-link">extra links</h3>
            <a href="http://sliet.ac.in/" className="link"> &#x21aa; <span> Sliet</span></a>
            <a href="http://academic.sliet.ac.in/bacholar-of-engineering/" className="link"> &#x21aa; <span> Sliet-Leet</span></a>
            <a href="https://wa.me/+917004817946" className="link"> &#x21aa; <span> Ask questions</span></a>
            <a href="mailto:testwizardsliet@gmail.com" className="link"> &#x21aa; <span> Send feedback</span></a>
            <a href="/Terms" className="link"> &#x21aa; <span> Terms and conditions</span></a>
         </div>

         <div className="box">
            <h3><i className="fas fa-lightbulb"></i> TestWizard </h3>
            <p className="p-box"> Start your preparation today.</p>
            <a href="mailto:testwizardsliet@gmail.com" className="link"> &#x21aa; <span>testwizardsliet@gmail.com</span></a>
            <a href="https://wa.me/+917004817946" className="link"> &#x21aa; <span>+91 70048-17946</span></a>
            <div className="share">
               <a href="#" className="fab fa-facebook-f"></a>
               <a href="#" className="fab fa-twitter"></a>
               <a href="#" className="fab fa-instagram"></a>
               <a href="#" className="fab fa-linkedin"></a>
            </div>
         </div>

      </div>

      <div className="credit"> Created by <span>The Bipanshu</span> | All rights reserved ! </div>

   </section>
  )
}

export default Footer