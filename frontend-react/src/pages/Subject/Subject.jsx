import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Subject.scss';

import { Footer } from '../../container';
import { Navbar } from '../../components';

import { urlFor, client } from '../../client';

const Subject = () => {
    const [subject, setSubject] = useState([]);

    useEffect(() => {
        const query = '*[_type == "subject"]';
    
        client.fetch(query)
          .then((data) => setSubject(data))
      }, [])

  return (
    <div>
        <Navbar />

        <section className="heading-link">
            <h3>Our Subjects</h3>
            <p> <a href="">home</a> / subjects </p>
        </section>

        <section className='subjects'>
        <h1 className="heading">Important subjects</h1>

            <div className="box-container--subject">

                {subject.map((subject, index) => {

                    return (
                        <div className="box" key={subject.name + index}>
                            <img src={urlFor(subject.imgUrl)} alt={subject.name} />
                            <h3>{subject.name}</h3>
                            <p>{subject.subCode}</p>
                            <p>{subject.modules}</p>
                            <Link to={{
                                pathname: `/subjectTest/${subject.name}/${subject.subCode}`
                            }}>
                                    <button>Take Test</button>
                            </Link>
                            &nbsp;&nbsp;

                            <a href="" target="_blank" rel="noopener noreferrer">
                                <button>Notes</button>
                            </a>
                        </div>
                    );
                })}

            </div>

        <br /><br /><br />

        </section>

        <Footer />
    </div>
  )
}

export default Subject