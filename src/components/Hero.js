// Hero.js

import React from 'react';
import Photo from './photo.jpeg'; // Importing the profile photo

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="profile-photo">
          <img src={Photo} alt="Profile" /> {/* Using the imported profile photo */}
        </div>
        <div>
          <div>Hello👋, I am</div>
          <h1>Param Godhani</h1>
          <p>Showcasing my work and skills</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
