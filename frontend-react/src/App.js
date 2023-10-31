import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Subject, Leet, AboutPage, Contact, Login, Register, Terms, SubjectTest } from './pages';
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/AboutPage' element={<AboutPage />} />
      <Route path='/Subject' element={<Subject />} />
      <Route path='/Leet' element={<Leet />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Terms' element={<Terms />} />

      <Route path='/subjectTest/:subjectName/:subCode' element={<SubjectTest />} />
    </Routes>
  );
}

export default App;