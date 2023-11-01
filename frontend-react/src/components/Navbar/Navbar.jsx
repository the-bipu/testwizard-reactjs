import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (

      <div className={`navbar--main ${isActive ? 'active' : ''}`}>
      <div className='container'>
            <a href="/" className="logo"> <i className="fas fa-lightbulb"></i> TestWizard </a>

            <div id="menu-btn" onClick={toggleNavbar} className="fas fa-bars"></div>

            <nav className="navbar">
              <div id="close-navbar" className="fas fa-times" onClick={toggleNavbar}></div>
                <Link to="/">Home</Link>
                <Link to="/Subject">Subject</Link>
                <Link to="/Leet">Leet</Link>
                <Link to="/AboutPage">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Login">Login</Link>
            </nav>

      </div>

      <div id="sidebar" className={`sidebar ${isActive ? 'active' : ''}`}>
        <div id="close-sidebar" className="fas fa-times" onClick={toggleNavbar}></div>

        <Link to="/">Home</Link>
        <Link to="/Subject">Subject</Link>
        <Link to="/Leet">Leet</Link>
        <Link to="/AboutPage">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Login">Login</Link>
      </div>

    </div>
  )
}

export default Navbar;