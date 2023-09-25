import React from 'react';

import './About.scss';

const About = () => {
  return (
    <div>
      <section className="subjects">

        <h1 className="heading">our popular subjects</h1>

        <div className="box-container">

          <div className="box">
              <img src="" alt="" />
              <h3>computer <br /> fundamentals</h3>
              <p>4 modules</p>
                <a href=""><button>Visit</button></a>
          </div>

          <div className="box">
              <img src="" alt="" />
              <h3>operating <br /> system</h3>
              <p>4 modules</p>
                <a href=""><button>Visit</button></a>
          </div>

          <div className="box">
              <img src="" alt="" />
              <h3>internet and web technology</h3>
              <p>4 modules</p>
                <a href=""><button>Visit</button></a>
          </div>

          <div className="box">
              <img src="" alt="" />
              <h3>computer <br /> programming</h3>
              <p>4 modules</p>
                <a href=""><button>Visit</button></a>
          </div>

          <div className="box">
              <img src="" alt="" />
              <h3>data <br /> structure</h3>
              <p>4 modules</p>
                <a href=""><button>Visit</button></a>
          </div>

        </div>
        <br />

        <div className="view">
          <a href="subject.php" className="view-more-sub"><button>View More</button></a>
        </div>
        <br /><br />

        <h1 className="heading">our popular sets</h1>

        <div className="box-container">

          <div className="box">
              <img src="" alt="" />
              <h3>LEET Group-A</h3>
              <p>Year 2012</p>
                <a href=""><button>Visit</button></a>
          </div>

          <div className="box">
              <img src="" alt="" />
              <h3>LEET Group-A</h3>
              <p>Year 2013</p>
                <a href=""><button>Visit</button></a>
          </div>

          <div className="box">
              <img src="" alt="" />
              <h3>LEET Group-A</h3>
              <p>Year 2014</p>
                <a href=""><button>Visit</button></a>
          </div>

          <div className="box">
              <img src="" alt="" />
              <h3>LEET Group-A</h3>
              <p>Year 2015</p>
                <a href=""><button>Visit</button></a>
          </div>

          <div className="box">
              <img src="" alt="" />
              <h3>LEET Group-A</h3>
              <p>Year 2016</p>
                <a href=""><button>Visit</button></a>
          </div>

        </div>
        <br />

        <div className="view">
          <a href="" className="view-more-sub"><button>View More</button></a>
        </div>

        </section>
    </div>
  )
}

export default About