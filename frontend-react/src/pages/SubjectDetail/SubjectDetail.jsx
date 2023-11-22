import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor } from '../../client';

import { Navbar, Loader } from '../../components';
import './SubjectDetail.scss';

const SubjectDetail = () => {
  const { subjectName, subCode } = useParams();
  const [subject, setSubject] = useState(null);

  useEffect(() => {
    const query = `*[_type == "subject" && name == "${subjectName}" && subCode == "${subCode}"][0]`;

    client.fetch(query)
      .then((data) => setSubject(data))
  }, [subjectName, subCode]);

  if (!subject) {
    return <div><Loader /></div>;
  }

  return (
    <div className='main--div'>
        <Navbar />

        <section className='detail--div'>
            <img src={urlFor(subject.imgUrl)} alt={subject.name} />
            <h1 className='heading--sub'>{subject.name}</h1>
            <p className='para--sub'>CODE: {subject.subCode}</p>
            <p className='para--sub'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eius expedita quod ex eos accusamus saepe nobis. Placeat minima dolorum illum quae perspiciatis quidem culpa, cupiditate laborum maxime beatae non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio quaerat quos ipsum quod nemo. Nesciunt ratione quia excepturi esse ipsa minus optio quas, corporis provident error soluta! Amet, at?</p>

            <div className="buttons--div">
                <Link to={{
                    pathname: `/subjectTest/${subject.name}/${subject.subCode}`
                }}>
                        <button className='test_button'>Take Test</button>
                </Link>

                <Link to={{
                    pathname: ``
                }}>
                        <button className='test_button'>Notes</button>
                </Link>
            </div>

        </section>

        <div className="footer--subdetails">
            <p>COPYRIGHT @2023 / TESTWIZARD</p>
        </div>
    </div>
  );
}

export default SubjectDetail;
