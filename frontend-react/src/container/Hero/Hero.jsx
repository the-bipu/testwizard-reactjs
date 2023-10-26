import React from 'react';

import './Hero.scss';
import images from '../../constants/images';

const Hero = () => {
  return (
    <div>
        <section className="main--container-hero">
            <div className="heading">Why this Site ??</div>

            <div className="main--content-hero">
              <div className="content--div-hero">
                TestWizard is a website designed to help students prepare for their Diploma Engineering and LEET examinations. The website offers a wide range of quizzes covering various subjects related to the exam, allowing students to test their knowledge and identify areas they need to focus on. 

                <br />
                <br />
                
                Additionally, TestWizard provides comprehensive notes and study materials to help students better understand the concepts covered in the exam. With a user-friendly interface and up-to-date content, TestWizard is the perfect resource for students looking to excel in their Diploma Engineering and LEET exams.

              </div>
              <div className="image--div-hero">
                <img className='image--group' src={images.group} alt="" />
              </div>
            </div>
        </section>
    </div>
  )
}

export default Hero