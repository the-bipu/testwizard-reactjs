import React, { useState, useEffect } from 'react';

import { images } from '../../constants';
import './AboutPage.scss';

import { Footer } from '../../container';
import { Navbar } from '../../components';

import { urlFor, client } from '../../client';

const AboutPage = () => {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query)
            .then((data) => setAbouts(data))
        }, [])

  return (
    <div>
        <Navbar />

        <section className="heading-link">
            <h3>about us</h3>
            <p> <a href="index.php">home</a> / about </p>
        </section>

        <section className="content">

            <section className="about-website-sec">

                <div className="about-website">
                    <img src={images.logo} alt="" />
                    <h3>TestWizard</h3>
                    <p className="skill-site">Quiz, learn, excel with us!</p>
                    <br />
                    <p className="about-site">TestWizard is a website designed to help students prepare for their Diploma Engineering and LEET examinations. The website offers a wide range of quizzes covering various subjects related to the exam, allowing students to test their knowledge and identify areas they need to focus on. Additionally, TestWizard provides comprehensive notes and study materials to help students better understand the concepts covered in the exam. With a user-friendly interface and up-to-date content, TestWizard is the perfect resource for students looking to excel in their Diploma Engineering and LEET exams.</p>
                    <br />
                    <p className="skill-site">"Test your knowledge, sharpen your skills: Take quizzes, get notes, and excel with us!"</p>

                    <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    </div>
                    {/* <!-- <button class="box-button">More</button> --> */}
                </div>

            </section>
            <br />

            <section className="about-section">

                <h1 className="heading">our team</h1>
                <section className="us-section">

                    {abouts.map((abouts, index) => (
                        <div className="box-us-section" key={abouts.name + index}>
                            <img src={urlFor(abouts.imgUrl)} alt={abouts.name} />
                            <h3>{abouts.name}</h3>
                            <p>{abouts.description}</p>
                            <div className="share">
                                <a href="#" className="fab fa-facebook-f"></a>
                                <a href="#" className="fab fa-twitter"></a>
                                <a href="#" className="fab fa-instagram"></a>
                                <a href="#" className="fab fa-linkedin"></a>
                            </div><br />
                            <button className="box-button"><a href="more-about.php">More</a></button>
                        </div>
                    ))}

                </section>

            </section>

            <br /><br />

        </section>

        <Footer />
    </div>
  )
}

export default AboutPage;