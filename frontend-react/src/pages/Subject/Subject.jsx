import React from 'react';

import './Subject.scss';

import { Footer } from '../../container';
import { Navbar } from '../../components';

const Subject = () => {
  return (
    <div>
        <Navbar />

        <section className="heading-link">
            <h3>Our Subjects</h3>
            <p> <a href="index.php">home</a> / subjects </p>
        </section>

        <section className='subjects'>
        <h1 class="heading">Important subjects</h1>

        <div class="box-container">

            <div class="box">
                <img src="" alt="" />
                <h3>computer <br /> fundamentals</h3>
                <p>4 modules</p>
                <a href="01_set_c_funda.php">
                    <button class="test_button">Take Test</button></a>
            </div>

            <div class="box">
                <img src="" alt="" />
                <h3>computer <br /> fundamentals</h3>
                <p>4 modules</p>
                <a href="01_set_c_funda.php">
                    <button class="test_button">Take Test</button></a>
            </div>

            <div class="box">
                <img src="" alt="" />
                <h3>computer <br /> fundamentals</h3>
                <p>4 modules</p>
                <a href="01_set_c_funda.php">
                    <button class="test_button">Take Test</button></a>
            </div>

            <div class="box">
                <img src="" alt="" />
                <h3>computer <br /> fundamentals</h3>
                <p>4 modules</p>
                <a href="01_set_c_funda.php">
                    <button class="test_button">Take Test</button></a>
            </div>

            <div class="box">
                <img src="" alt="" />
                <h3>computer <br /> fundamentals</h3>
                <p>4 modules</p>
                <a href="01_set_c_funda.php">
                    <button class="test_button">Take Test</button></a>
            </div>

            </div>

            <br /><br /><br />

            <h1 class="heading">important subjects notes</h1>

            <div class="box-container">

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                        <img src="images/subject-icon (1).jpg" alt="" />
                        <h3>computer <br /> fundamentals</h3>
                        <p>12 modules</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                        <img src="images/subject-icon (1).jpg" alt="" />
                        <h3>computer <br /> fundamentals</h3>
                        <p>12 modules</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                        <img src="images/subject-icon (1).jpg" alt="" />
                        <h3>computer <br /> fundamentals</h3>
                        <p>12 modules</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                        <img src="images/subject-icon (1).jpg" alt="" />
                        <h3>computer <br /> fundamentals</h3>
                        <p>12 modules</p>
                    </div>
                </a>
                
                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                        <img src="images/subject-icon (1).jpg" alt="" />
                        <h3>computer <br /> fundamentals</h3>
                        <p>12 modules</p>
                    </div>
                </a>

            </div>

        </section>

        <Footer />
    </div>
  )
}

export default Subject