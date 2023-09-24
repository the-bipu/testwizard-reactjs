import React from 'react';

import './About.scss';

const About = () => {
  return (
    <div>
      <section class="subjects">

        <h1 class="heading">our popular subjects</h1>

        <div class="box-container">

          <div class="box">
              <img src="images/subject-icon (1).jpg" alt="" />
              <h3>computer <br /> fundamentals</h3>
              <p>4 modules</p>
                <a href="leet.php"><button>Visit</button></a>
          </div>

          <div class="box">
              <img src="images/subject-icon (2).jpg" alt="" />
              <h3>operating <br /> system</h3>
              <p>4 modules</p>
                <a href="leet.php"><button>Visit</button></a>
          </div>

          <div class="box">
              <img src="images/subject-icon (3).jpg" alt="" />
              <h3>internet and web technology</h3>
              <p>4 modules</p>
                <a href="leet.php"><button>Visit</button></a>
          </div>

          <div class="box">
              <img src="images/subject-icon (4).jpg" alt="" />
              <h3>computer <br /> programming</h3>
              <p>4 modules</p>
                <a href="leet.php"><button>Visit</button></a>
          </div>

          <div class="box">
              <img src="images/subject-icon (5).jpg" alt="" />
              <h3>data <br /> structure</h3>
              <p>4 modules</p>
                <a href="leet.php"><button>Visit</button></a>
          </div>

        </div>
        <br />

        <div class="view">
          <a href="subject.php" class="view-more-sub"><button>View More</button></a>
        </div>
        <br /><br />

        <h1 class="heading">our popular sets</h1>

        <div class="box-container">

          <div class="box">
              <img src="images/leet 2012.jpg" alt="" />
              <h3>LEET Group-A</h3>
              <p>Year 2012</p>
                <a href="leet.php"><button>Visit</button></a>
          </div>

          <div class="box">
              <img src="images/leet 2013.jpg" alt="" />
              <h3>LEET Group-A</h3>
              <p>Year 2013</p>
                <a href="leet.php"><button>Visit</button></a>
          </div>

          <div class="box">
              <img src="images/leet 2014.jpg" alt="" />
              <h3>LEET Group-A</h3>
              <p>Year 2014</p>
                <a href="leet.php"><button>Visit</button></a>
          </div>

          <div class="box">
              <img src="images/leet 2015.jpg" alt="" />
              <h3>LEET Group-A</h3>
              <p>Year 2015</p>
                <a href="leet.php"><button>Visit</button></a>
          </div>

          <div class="box">
              <img src="images/leet 2016.jpg" alt="" />
              <h3>LEET Group-A</h3>
              <p>Year 2016</p>
                <a href="leet.php"><button>Visit</button></a>
          </div>

        </div>
        <br />

        <div class="view">
          <a href="leet.php" class="view-more-sub"><button>View More</button></a>
        </div>

        </section>
    </div>
  )
}

export default About