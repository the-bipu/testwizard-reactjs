import React from 'react';

import './Hero.scss';
import images from '../../constants/images';

const Hero = () => {
  return (
    <div>
        <section className="main--container-hero">
            <div className="heading">Why TestWizard ??</div>

            <div className='main--con'>
              <div className="main--content-hero">
                <div className="content--div-hero">
                  TestWizard stands as a beacon of support for aspiring students preparing for their Diploma Engineering and LEET examinations. Through its intuitive website, TestWizard presents an array of meticulously crafted quizzes spanning various subjects crucial for the upcoming exams. These quizzes not only challenge students but also serve as a diagnostic tool, highlighting areas that require extra attention. Moreover, TestWizard goes the extra mile by offering comprehensive notes and study materials, ensuring that students grasp the intricate concepts essential for success. With its commitment to providing updated content and a user-friendly interface, TestWizard becomes an indispensable ally for students striving to excel in their academic pursuits.
                </div>
                <div className="image--div-hero">
                  <img className='image--group' src={images.about2} alt="" />
                </div>
              </div>

              <div className="main--content-hero">
                <div className="image--div-hero">
                  <img className='image--group' src={images.about1} alt="" />
                </div>
                <div className="content--div-hero">
                  Navigating the complexities of Diploma Engineering and LEET examinations becomes a manageable feat with TestWizard at students' fingertips. This dynamic website hosts an extensive collection of quizzes covering diverse subjects pertinent to the exams, empowering students to gauge their knowledge and skill levels. In addition to the stimulating quizzes, TestWizard enriches students' learning experiences by offering comprehensive study materials and notes. These resources act as a guiding light, unraveling intricate concepts and aiding students in their quest for mastery. With its contemporary interface and commitment to delivering updated content, TestWizard emerges as the ultimate companion for students aiming to surpass academic hurdles with confidence.
                </div>
              </div>

              <div className="main--content-hero">
                <div className="content--div-hero">
                  TestWizard emerges as the ultimate study companion for students gearing up for their Diploma Engineering and LEET examinations. Its online platform serves as a treasure trove of quizzes meticulously curated to encompass a wide spectrum of subjects crucial for exam success. Through these quizzes, TestWizard not only challenges students but also provides valuable insights into their strengths and weaknesses. Moreover, TestWizard doesn't stop there; it equips students with comprehensive study materials and notes, simplifying complex concepts and fostering a deeper understanding. With its user-friendly interface and commitment to delivering the most recent content, TestWizard stands as a reliable ally for students, guiding them toward academic excellence.
                </div>
                <div className="image--div-hero">
                  <img className='image--group' src={images.about3} alt="" />
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Hero