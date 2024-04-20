// Hero.js


import React, { useState, useEffect } from 'react';
import Photo from './photo.jpeg'; 

const Hero = () => {
  const [text, setText] = useState('Hello');
  const words = "   👋, I am Param Godhani. Showcasing my work and skills.";
  let index = 0;

  useEffect(() => {
    const typingTimer = setInterval(() => {
      if (index < words.length-1) {
        setText(prevText => prevText + words[index]);
        index++;
      } else {
        clearInterval(typingTimer);
      }
    }, 100);

    return () => clearInterval(typingTimer);
  }, [index]);

  return (
    <section id="hero">
      <div className="hero-content">
        <div className="profile-photo">
          <img src={Photo} alt="Profile" />
        </div>
        <div>
          <div className="txt">{text}</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
