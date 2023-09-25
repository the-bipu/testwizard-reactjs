import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Home, Subject, Leet, AboutPage, Contact, Terms } from './pages';
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/AboutPage' element={<AboutPage />} />
      <Route path='/Subject' element={<Subject />} />
      <Route path='/Leet' element={<Leet />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Terms' element={<Terms />} />
    </Routes>
  );
}

export default App;