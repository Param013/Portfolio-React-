// Projects.js

import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-content">
        <h1>Projects</h1>
        <div className="project-card">
          <h3><a href="https://github.com/Param013/My-Portfolio">Project 1</a></h3>
          <p>Personal portfolio using HTML and CSS.</p>
        </div>
        <div className="project-card">
          <h3><a href="https://github.com/Param013/calculator">Project 2</a></h3>
          <p>Calculator with currency converter functionality.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
