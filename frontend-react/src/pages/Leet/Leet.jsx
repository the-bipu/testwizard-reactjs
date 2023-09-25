import React, { useState, useEffect } from 'react';

import './Leet.scss';

import { Footer } from '../../container';
import { Navbar } from '../../components';

import { urlFor, client } from '../../client';

const Leet = () => {

    const [leet, setLeet] = useState([]);
    const [leetNotes, setLeetNotes] = useState([])

    useEffect(() => {
        const query = '*[_type == "leet"]';
    
        client.fetch(query)
          .then((data) => setLeet(data))
      }, [])

    useEffect(() => {
        const query = '*[_type == "leetnotes"]';
    
        client.fetch(query)
          .then((data) => setLeetNotes(data))
      }, [])

  return (
    <div>
       <Navbar />

        <section class="heading-link">
            <h3>LEET</h3>
            <p> <a href="index.php">home</a> / LEET </p>
        </section>

        <section class="subjects">

            <h1 class="heading">Syllabus + Notes</h1>

            <div class="box-container">

                {leetNotes.map((leetNotes, index) => (
                    <div class="box" key={leetNotes.name + index}>
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

            </div>
            <br /><br />

            <h1 class="heading">Test Papers</h1>

            {/* 20 mathematics, 15 physics and 15 chemistry
            50 minutes for 50 questions */}

            <div class="box-container">

                {leet.map((leet, index) => (
                        <div class="box" key={leet.name + index}>
                            <img src={urlFor(leet.imgUrl)} alt={leet.name} />
                            <h3>{leet.name}</h3>
                            <p>{leet.year}</p>
                            <a href={leet.moduleLink}>
                                <button>Take Test</button>
                            </a>
                        </div>
                ))}

            </div>
            <br /><br />

        </section>

        <Footer />
    </div>
  )
}

export default Leet