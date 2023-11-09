import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client, urlFor } from '../../client';

const SubjectDetail = () => {
  const { subjectName, subCode } = useParams();
  const [subject, setSubject] = useState(null);

  useEffect(() => {
    const query = `*[_type == "subject" && name == "${subjectName}" && subCode == "${subCode}"][0]`;

    client.fetch(query)
      .then((data) => setSubject(data))
  }, [subjectName, subCode]);

  if (!subject) {
    return <div>Loading...</div>; // Add a loading state if needed
  }

  return (
    <div>
      <h1>{subject.name}</h1>
      <img src={urlFor(subject.imgUrl)} alt={subject.name} />
      <p>{subject.subCode}</p>
      <p>{subject.modules}</p>
    </div>
  );
}

export default SubjectDetail;
