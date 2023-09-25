import React, { useState, useEffect } from 'react';

import './About.scss';

import { urlFor, client } from '../../client';

const About = () => {
  const [subject, setSubject] = useState([]);
  const [leet, setLeet] = useState([]);

    useEffect(() => {
        const query = '*[_type == "subject"]';
    
        client.fetch(query)
          .then((data) => setSubject(data))
    }, [])

    useEffect(() => {
        const query = '*[_type == "leet"]';
    
        client.fetch(query)
          .then((data) => setLeet(data))
      }, [])

  return (
    <div>
      <section className="subjects">

        <h1 className="heading">main subjects</h1>

        <div className="box-container">

          {subject.slice(0, 4).map((subject, index) => (
            <div class="box" key={subject.name + index}>
                <img src={urlFor(subject.imgUrl)} alt={subject.name} />
                <h3>{subject.name}</h3>
                <p>{subject.modules}</p>
                <a href={subject.moduleLink}>
                    <button>Take Test</button>
                </a>
                &nbsp;&nbsp;
                <a href={subject.moduleLink}>
                    <button>Notes</button>
                </a>
            </div>
          ))}

        </div>
        <br />

        <div className="view">
          <a href={'/Subject'} className="view-more-sub"><button>Explore</button></a>
        </div>
        <br /><br />

        <h1 className="heading">main sets</h1>

        <div class="box-container">
          {leet.slice(0, 4).map((leet, index) => (
            <div class="box" key={leet.name + index}>
                <img src={urlFor(leet.imgUrl)} alt={leet.name} />
                <h3>{leet.name}</h3>
                <p>{leet.modules}</p>
                <a href={leet.moduleLink}>
                    <button>Syllabus</button>
                </a>
                &nbsp;&nbsp;
                <a href={leet.moduleLink}>
                    <button>Notes</button>
                </a>
            </div>
          ))}

        </div>
        <br />

        <div className="view">
          <a href={'/Leet'} className="view-more-sub"><button>Explore</button></a>
        </div>

        </section>
    </div>
  )
}

export default About