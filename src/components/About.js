// About.js

import React from 'react';

const About = () => {

  const link = [
    {url:"https://www.w3schools.com/html/default.asp", label: 'HTML'},
    {url:"https://www.w3schools.com/css/default.asp", label: 'CSS'},
    {url:"https://www.w3schools.com/js/default.asp", label: 'JavaScript'},
    {url:"https://www.w3schools.com/react/default.asp", label: 'React'},
    {url:"https://www.geeksforgeeks.org/next-js-introduction/", label: 'Next.js'},
    {url:"https://www.w3schools.com/js/default.asp", label: 'Node.js'},
    {url:"https://www.w3schools.com/cpp/default.asp", label: 'C++'},
    {url:"https://www.w3schools.com/c/index.php", label: 'C'},
    {url:"https://www.w3schools.com/python/default.asp", label: 'Python'},
    {url:"https://www.w3schools.com/r/default.asp", label: 'RStudio'},
    {url:"https://www.w3schools.com/java/default.asp", label: 'Java'},
    {url:"https://www.w3schools.com/typescript/index.php", label: 'Typescript'},
  ];

  const links = (url) => {
    window.location.href=url;
  }

  return (
    <section id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>I am a passionate developer with expertise in:</p>
        <div className="languages-container">
        {link.map((link,index)=>  
          (<button key="index"className="language-card" onClick={()=>links(link.url)}>
            {link.label}</button>))}
        </div>
        <br></br>
      </div>
    </section>
  );
}

export default About;
