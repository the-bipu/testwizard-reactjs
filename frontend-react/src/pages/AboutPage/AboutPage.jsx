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
            <p> <a href="./home">home</a> / about </p>
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

                <section className="us-section--large">

                    {abouts.map((abouts, index) => (
                        <div className="box-section--large" key={abouts.name + index}>
                            <div className="image--div">
                                <img src={urlFor(abouts.imgUrl)} alt={abouts.name} />
                            </div>
                            <div className="content--div">
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

{/* <div class="box-us-section">
                <img src="images/manas-madhukar.jpg" alt="">
                <h3>Manas Madhukar</h3>
                <p class="skill">Front-end Developer</p>
                <p class="about-me">Hello and welcome to my about page! I am a front-end developer who is passionate about creating visually stunning and engaging web experiences. From a young age, I have been drawn to the world of design and technology, and I have found my calling in the field of web development. As a front-end developer, I specialize in creating the user-facing side of websites, using HTML, CSS, and JavaScript to bring designs to life. I have experience working on a variety of projects, from small business websites to complex web applications. When I'm not coding, you can find me exploring new coffee shops, hiking in the mountains, or playing video games. I am excited to continue growing my skills and collaborating with others in the industry. Thanks for stopping by!</p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
                <!-- <button class="box-button">More</button> -->
            </div>

            <div class="box-us-section">
                <img src="images/aditya-kumar.jpg" alt="">
                <h3>Aditya Kumar</h3>
                <p class="skill">Full-Stack Web Developer</p>
                <p class="about-me">Hello and welcome to my about page! I am a full-stack developer with a passion for creating dynamic and interactive web applications. My expertise spans both front-end and back-end development, allowing me to design and implement end-to-end solutions that meet the needs of users and businesses alike. With a strong foundation in programming languages such as JavaScript, Python, and Java, I am experienced in building responsive user interfaces, integrating databases, and creating server-side logic. I enjoy collaborating with other developers, designers, and stakeholders to bring projects to life. When I'm not coding, you can find me playing guitar, practicing yoga, or exploring the great outdoors. I am excited about the endless possibilities of full-stack development and the potential for innovation it brings. Thanks for stopping by my page!</p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>

            <div class="box-us-section">
                <img src="images/bipanshu-kumar.jpg" alt="">
                <h3>Bipanshu Kumar</h3>
                <p class="skill">Backend Developer</p>
                <p class="about-me">Hello and welcome to my about page! I am a back-end developer who is passionate about building robust and scalable web applications. With a strong background in programming languages such as Python, Java, and PHP, I specialize in developing the server-side of websites, creating APIs, and integrating databases. I enjoy working on complex projects that require creative problem-solving and attention to detail. My experience in the industry has allowed me to collaborate with other developers, designers, and stakeholders to deliver high-quality software solutions. When I'm not coding, I enjoy playing basketball, reading science fiction novels, and exploring new cities. I am excited about the future of web development and the opportunities it brings for innovation and creativity. Thanks for stopping by my page!</p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div> */}