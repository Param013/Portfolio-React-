// About.js

import React from 'react';

const About = () => {
  const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "C++",
    "C",
    "Python",
    "RStudio",
    "Node.js",
    "Java",
    "Typescript"
  ];

  return (
    <section id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>I am a passionate developer with expertise in:</p>
        <div className="languages-container">
          {languages.map((language, index) => (
            <div key={index} className="language-card">
              {language}
            </div>
          ))}
        </div>
        <br></br>
      </div>
      {/* <a className="Resumebtn" href="Resume.html">Resume</a> */}
    </section>
  );
}

export default About;
