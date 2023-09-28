import React, { useState, useEffect } from 'react';

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

                    // const pdfFile = subject.pdfFile;
                    // const pdfUrl = pdfFile && pdfFile.asset._ref;
                    // const cleanedUrl = pdfUrl && pdfUrl.replace(/file-/, '');
                    // const EcleanedUrl = pdfUrl && cleanedUrl.replace(/-pdf$/, '');

                    const EcleanedUrl = subject.pdfFile?.asset._ref?.replace(/file-/, '')?.replace(/-pdf$/, '');

                    return (
                        <div className="box" key={subject.name + index}>
                            <img src={urlFor(subject.imgUrl)} alt={subject.name} />
                            <h3>{subject.name}</h3>
                            <p>{subject.modules}</p>
                            <a href={subject}>
                                <button>Take Test</button>
                            </a>
                            &nbsp;&nbsp;
                            
                            {subject.pdfFile && (
                                <a href={`https://cdn.sanity.io/files/qvb402f6/production/${EcleanedUrl}.pdf`} target="_blank" rel="noopener noreferrer">
                                    <button>Notes</button>
                                </a>
                            )}
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