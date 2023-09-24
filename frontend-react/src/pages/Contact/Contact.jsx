import React from 'react';

import './Contact.scss';

import { Footer } from '../../container';
import { Navbar } from '../../components';

const Contact = () => {
  return (
      <div>
        <Navbar />

        <section class="heading-link">
            <h3>contact us</h3>
            <p> <a href="index">home</a> / contact </p>
        </section>

        <section class="contact">

            <h1 class="heading"> get in touch </h1>

            <div class="icons-container">

                <div class="icons">
                    <i class="fas fa-phone"></i>
                    <h3>phone :</h3>
                    <p>+91 99999 99999</p>
                    <p>+91 88888 88888</p>
                </div>

                <div class="icons">
                    <i class="fas fa-envelope"></i>
                    <h3> email : </h3>
                    <p>testwizardsliet@gmail.com</p>
                    <p>email@gmail.com</p>
                </div>

                <div class="icons">
                    <i class="fas fa-map"></i>
                    <h3>address :</h3>
                    <p>India</p>
                </div>

            </div>

        </section>

        <Footer />
    </div>
  )
}

export default Contact