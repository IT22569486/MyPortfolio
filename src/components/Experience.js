import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>IFS R&D International | Undergraduate Trainee Software Engineer</h3>
        <p className="date">Sep 2024 - Sep 2025</p>
        <ul>
          <li>Performed bug fixing and provided application support for the IFS Enterprise System, enhancing system stability.</li>
          <li>Leveraged PL/SQL and IFS's proprietary Marble technology to diagnose and resolve complex system issues.</li>
          <li>Utilized a professional toolchain including Git, SourceTree, Jira, and Jenkins for version control and CI/CD pipelines.</li>
          <li>Authored and executed test scripts to validate data integrity and ensure system reliability before deployment.</li>
          <li>Collaborated with a senior mentor and cross-functional teams to enhance technical and problem-solving skills.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;