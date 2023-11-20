import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Subject, Leet, AboutPage, Contact, Login, Terms, SubjectTest, SubjectDetail, Dashboard, AdminDashboard } from './pages';
import './App.scss';
import { UserProvider } from './context/userContext';

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutPage' element={<AboutPage />} />
        <Route path='/Subject' element={<Subject />} />
        <Route path='/Leet' element={<Leet />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Terms' element={<Terms />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/AdminDashboard' element={<AdminDashboard />} />

        <Route path='/subjectTest/:subjectName/:subCode' element={<SubjectTest />} />
        <Route path="/subjectDetail/:subjectName/:subCode" element={<SubjectDetail />} />
      </Routes>
    </UserProvider>
  );
}

export default App;