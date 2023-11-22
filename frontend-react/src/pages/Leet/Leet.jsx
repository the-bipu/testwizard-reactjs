import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Leet.scss';

import { Footer } from '../../container';
import { Navbar, Spinner } from '../../components';

import { urlFor, client } from '../../client';

const Leet = () => {

    const [leet, setLeet] = useState([]);
    const [leetNotes, setLeetNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "leet"] | order(title asc)`;
    
        client.fetch(query)
        .then((data) => {
            setLeet(data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching subject:", error);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        const query = `*[_type == "leetnotes"] | order(title asc)`;
    
        client.fetch(query)
        .then((data) => {
            setLeetNotes(data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching subject:", error);
            setIsLoading(false);
        });
    }, []);

  return (
    <div>
       <Navbar />

        <section className="heading-link">
            <h3>LEET</h3>
            <p> <a href="/">home</a> / LEET </p>
        </section>

        <section className="subjects">

            <h1 className="heading">Syllabus + Notes</h1>

            {isLoading
            ? <div><Spinner /></div>
            : <div className="box-container">

                {leetNotes.map((leetNotes, index) => (
                    <div className="box" key={leetNotes.name + index}>
                        <img src={urlFor(leetNotes.imgUrl)} alt={leetNotes.name} />
                        <h3>{leetNotes.name}</h3>
                        <p>{leetNotes.description}</p>
                        <a href={leetNotes.moduleLink}>
                            <button>Syllabus</button>
                        </a>
                        &nbsp;&nbsp;
                        <a href={leetNotes.moduleLink}>
                            <button>Notes</button>
                        </a>
                    </div>
                ))}

            </div>}
            <br /><br />

            <h1 className="heading">Test Papers</h1>

            {/* 20 mathematics, 15 physics and 15 chemistry
            50 minutes for 50 questions */}

            {isLoading
            ? <div><Spinner /></div>
            : <div className="box-container">

                {leet.map((leet, index) => (
                    <div className="box" key={leet.name + index}>
                        <img src={urlFor(leet.imgUrl)} alt={leet.name} />
                        <h3>{leet.name}</h3>
                        <p>{leet.year}</p>
                        <Link to={{
                            pathname: `/leetTest/${leet.year}`
                        }}>
                            <button>Take Test</button>
                        </Link>
                    </div>
                ))}

            </div>}
            <br /><br />

        </section>

        <Footer />
    </div>
  )
}

export default Leet