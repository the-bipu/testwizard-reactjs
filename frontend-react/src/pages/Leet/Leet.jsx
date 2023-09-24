import React from 'react';

import './Leet.scss';

import { Footer } from '../../container';
import { Navbar } from '../../components';

const Leet = () => {
  return (
    <div>
       <Navbar />

        <section class="heading-link">
            <h3>LEET</h3>
            <p> <a href="index.php">home</a> / LEET </p>
        </section>

        <section class="subjects">

            <h1 class="heading">Syllabus</h1>

            <div class="box-container">

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                    <img src="images/Chemistry.jpg" alt="" />
                    <h3>Physics & Chemistry</h3>
                    <p>Syllabus</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                    <img src="images/Mathematics.jpg" alt="" />
                    <h3>Mathematics</h3>
                    <p>Syllabus</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                    <img src="images/Group-A.jpg" alt="" />
                    <h3>Group-A</h3>
                    <p>Syllabus</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                    <img src="images/Group-B.jpg" alt="" />
                    <h3>Group-B</h3>
                    <p>Syllabus</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                    <img src="images/Group-C.jpg" alt="" />
                    <h3>Group-C</h3>
                    <p>Syllabus</p>
                    </div>
                </a>

            </div>
            <br /><br />

            <h1 class="heading">Physics, Chemistry and Mathematics</h1>

            {/* 20 mathematics, 15 physics and 15 chemistry
            50 minutes for 50 questions */}

            <div class="box-container">

                <div class="box">
                    <img src="images/leet 2012.jpg" alt="" />
                    <h3>LEET PCM</h3>
                    <p>Year 2012</p>
                    <a href="./LEET-Sets/01_SET_PCM_2012.html">
                        <button class="test_button">Take Test</button>
                    </a>
                </div>

                <div class="box">
                    <img src="images/leet 2013.jpg" alt="" />
                    <h3>LEET PCM</h3>
                    <p>Year 2013</p>
                    <a href="./LEET-Sets/02_SET_PCM_2013.html">
                    <button class="test_button">Take Test</button></a>
                </div>

                <div class="box">
                    <img src="images/leet 2014.jpg" alt="" />
                    <h3>LEET PCM</h3>
                    <p>Year 2014</p>
                    <a href="./LEET-Sets/03_SET_PCM_2014.html">
                    <button class="test_button">Take Test</button></a>
                </div>

                <div class="box">
                    <img src="images/leet 2015.jpg" alt="" />
                    <h3>LEET PCM</h3>
                    <p>Year 2015</p>
                    <a href="./LEET-Sets/04_SET_PCM_2015.html">
                    <button class="test_button">Take Test</button></a>
                </div>

            </div>
            <br /><br />

            <h1 class="heading">Group A (Electric, Electronic and Computer Group)</h1>

            <div class="box-container">

                <div class="box">
                    <img src="images/leet 2012.jpg" alt="" />
                    <h3>LEET Group-A</h3>
                    <p>Year 2012</p>
                    <a href="./LEET-Sets/01_SET_GROUP_A_2012.html">
                    <button class="test_button">Take Test</button></a>
                </div>

                <div class="box">
                    <img src="images/leet 2013.jpg" alt="" />
                    <h3>LEET Group-A</h3>
                    <p>Year 2013</p>
                    <a href="./LEET-Sets/02_SET_GROUP_A_2013.html">
                    <button class="test_button">Take Test</button></a>
                </div>

                <div class="box">
                    <img src="images/leet 2014.jpg" alt="" />
                    <h3>LEET Group-A</h3>
                    <p>Year 2014</p>
                    <a href="./LEET-Sets/03_SET_GROUP_A_2014.html">
                    <button class="test_button">Take Test</button></a>
                </div>

                <div class="box">
                    <img src="images/leet 2015.jpg" alt="" />
                    <h3>LEET Group-A</h3>
                    <p>Year 2015</p>
                    <a href="./LEET-Sets/04_SET_GROUP_A_2015.html">
                    <button class="test_button">Take Test</button></a>
                </div>

            </div>
            <br /><br />

            <h1 class="heading">General Knowledge, Mental Aptitude & English</h1>

            <div class="box-container">

                <div class="box">
                    <img src="images/leet 2012.jpg" alt="" />
                    <h3>LEET Aptitude</h3>
                    <p>Year 2012</p>
                    <a href="./LEET-Sets/01_SET_APTITUDE_2012.html">
                    <button class="test_button">Take Test</button></a>
                </div>

                <div class="box">
                    <img src="images/leet 2013.jpg" alt="" />
                    <h3>LEET Aptitude</h3>
                    <p>Year 2013</p>
                    <a href="./LEET-Sets/02_SET_APTITUDE_2013.html">
                    <button class="test_button">Take Test</button></a>
                </div>

                <div class="box">
                    <img src="images/leet 2014.jpg" alt="" />
                    <h3>LEET Aptitude</h3>
                    <p>Year 2014</p>
                    <a href="./LEET-Sets/03_SET_APTITUDE_2014.html">
                    <button class="test_button">Take Test</button></a>
                </div>

                <div class="box">
                    <img src="images/leet 2015.jpg" alt="" />
                    <h3>LEET Aptitude</h3>
                    <p>Year 2015</p>
                    <a href="./LEET-Sets/04_SET_APTITUDE_2015.html">
                    <button class="test_button">Take Test</button></a>
                </div>

            </div>
            <br /><br />

            <h1 class="heading">Notes Section</h1>

            <div class="box-container">

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                    <img src="images/Physics.jpg" alt="" />
                    <h3>Physics</h3>
                    <p>Notes of Physics</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                    <img src="images/Chemistry.jpg" alt="" />
                    <h3>Chemistry</h3>
                    <p>Notes of Physics</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                    <img src="images/Mathematics.jpg" alt="" />
                    <h3>Mathematics</h3>
                    <p>Notes of Physics</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                    <img src="images/Group-A.jpg" alt="" />
                    <h3>Group-A</h3>
                    <p>Notes of Group-A</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                    <img src="images/Group-B.jpg" alt="" />
                    <h3>Group-B</h3>
                    <p>Notes of Group-B</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div class="box">
                    <img src="images/Group-C.jpg" alt="" />
                    <h3>Group-C</h3>
                    <p>Notes of Group-C</p>
                    </div>
                </a>

            </div>

        </section>

        <Footer />
    </div>
  )
}

export default Leet