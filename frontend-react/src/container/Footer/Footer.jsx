import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <section className="footer">

      <div className="box-container">

         <div className="box">
            <h3 className="h3-link">our info</h3>
            <a href="https://goo.gl/maps/nwqCFEoekM7s3FJ2A" className="link"> &#x21aa; India</a>
            <a href="https://goo.gl/maps/r3oSCoMUpr9RpK976" className="link"> &#x21aa; Sliet</a>
            <a href="http://academic.sliet.ac.in/bacholar-of-engineering/" className="link"> &#x21aa; Programmes</a>
            <a href="http://library.sliet.ac.in/e-resources/e-books/" className="link"> &#x21aa; E-Lib</a>
            <a href="/AboutPage" className="link"> &#x21aa; Webiste Team</a>
         </div>

         <div className="box">
            <h3 className="h3-link">quick links</h3>
            <a href="/Home" className="link"> &#x21aa; Home</a>
            <a href="/Subject" className="link"> &#x21aa; Subject</a>
            <a href="/Leet" className="link"> &#x21aa; Leet</a>
            <a href="/AboutPage" className="link"> &#x21aa; About</a>
            <a href="/Contact" className="link"> &#x21aa; Contact</a>
         </div>

         <div className="box">
            <h3 className="h3-link">extra links</h3>
            <a href="http://sliet.ac.in/" className="link"> &#x21aa; Sliet</a>
            <a href="http://academic.sliet.ac.in/bacholar-of-engineering/" className="link"> &#x21aa; Sliet-Leet</a>
            <a href="https://wa.me/+917004817946" className="link"> &#x21aa; Ask questions</a>
            <a href="mailto:testwizardsliet@gmail.com" className="link"> &#x21aa; Send feedback</a>
            <a href="/Terms" className="link"> &#x21aa; Terms and conditions</a>
         </div>

         <div className="box">
            <h3><i className="fas fa-lightbulb"></i> TestWizard </h3>
            <p className="p-box"> Start your preparation today.</p>
            <a href="mailto:testwizardsliet@gmail.com" className="link"> &#x21aa; testwizardsliet@gmail.com </a>
            <a href="https://wa.me/+917004817946" className="link"> &#x21aa; +91 70048-17946 </a>
            <div className="share">
               <a href="#" className="fab fa-facebook-f"></a>
               <a href="#" className="fab fa-twitter"></a>
               <a href="#" className="fab fa-instagram"></a>
               <a href="#" className="fab fa-linkedin"></a>
            </div>
         </div>

      </div>

      <div className="credit"> Created by <span>Team Manas Madhukar</span> | All rights reserved ! </div>

   </section>
  )
}

export default Footer