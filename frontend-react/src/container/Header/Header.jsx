import React from 'react';

import './Header.scss';
import { images } from '../../constants';

const Header = () => {
  return (
    <section className="home">

      <div className="swiper home-slider">

         <div className="swiper-wrapper">

            <section className="swiper-slide slide">
               <div className="content">
                  <h3>It's Preparation Time</h3>
                  <p>The only purpose of developing this website is to help the SLIETIANS to preapare for the
                     Examinations. We've added LEET and subject section separately and you can choose the subjects and
                     also there're sets available for every subjects.</p>
                  <a href="" className="btn">get started</a>
               </div>
            </section>

         </div>

      </div>

   </section>
  )
}

export default Header