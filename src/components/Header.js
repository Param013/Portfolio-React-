// Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          {/* /* <h1 className="logo">My Portfol io</h1> */ }
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
