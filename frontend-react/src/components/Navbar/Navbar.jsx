import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
      <div className="header">

        <a href="#" className="logo"> <i className="fas fa-lightbulb"></i> TestWizard </a>

          <nav className="navbar">
            <div id="close-navbar" className="fas fa-times"></div>
              <Link to="/">Home</Link>
              <Link to="/Subject">Subject</Link>
              <Link to="/Leet">Leet</Link>
              <Link to="/AboutPage">About</Link>
              <Link to="/Contact">Contact</Link>
          </nav>
      </div>
  )
}

export default Navbar;