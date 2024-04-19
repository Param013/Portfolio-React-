// Resume.js

import React from 'react';

const Resume = () => {
    return (
        <section id="resume">

            <div className="resume">
                <div className="section">
                    <h2>Educational Details</h2>
                    <ul>
                        <li><strong>Higher Secondary School:</strong> 80.2%, Krishna School,Rajkot</li>
                        <li><strong>JEE Mains(%percentile):</strong>97.18%</li>
                        <li><strong>University:</strong> Vellore Institute of Technology</li>
                        <li><strong>Current CGPA(till 3rd Sem):</strong> 8.50 </li>
                        <li><strong>Degree:</strong> B.Tech Computer Science Engineering</li>
                        <li><strong>Graduation Year:</strong> 2026</li>
                    </ul>
                </div>
                <div className="section">
                    <h2>Skills</h2>
                    <ul>
                        <li>Frontend Web-Development,C,C++,Python, Java,etc.</li>
                    </ul>
                </div>
                {/* <div className="section">
                    <h2>Work Experience</h2>
                    <div className="job">
                        <h3>Job Title</h3>
                        <p>Company Name | Location</p>
                        <p>Date Range</p>
                        <ul>
                            <li>Responsibility 1</li>
                            <li>Responsibility 2</li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default Resume;
