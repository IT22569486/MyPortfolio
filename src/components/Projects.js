import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Bus Tracking System with Occupancy & Arrival Time Prediction',
      description: 'Developing a real-time bus tracking and predictive analytics system to estimate arrival times and passenger occupancy for Sri Lankan public buses. Applied LSTM, LightGBM, and XGBoost models on large scale SLTB ticketing data to forecast arrival times and passenger demand. Built a data preprocessing to generate trip and stop-level records and integrated predictions into a mobile application for live tracking and crowd insights.',
      technologies: 'LSTM, LightGBM, XGBoost'
    },
    {
      title: 'Cricket Scoring System',
      description: 'Developing a web-based cricket scoring system using .NET for backend services and Angular for the frontend. Implementing core match scoring features with a focus on accuracy, real-time updates, and usability.',
      technologies: '.NET, Angular'
    },
    {
      title: 'Cricket Club Management System',
      description: 'Engineered a full-stack web application using React, Node.js, Express, and MongoDB to streamline cricket club operations. Implemented player performance tracking and automated report generation, providing coaches with actionable insights. Utilized Redux for state management to ensure consistent user experience across different user roles.',
      technologies: 'MERN Stack, Redux'
    },
    {
        title: 'Urban Area\'s Garbage Management System',
        description: 'Developed a system featuring QR-code-based trash bin registration and dynamic route optimization for collection trucks. Built an analytics dashboard for city administrators, enabling data-driven decisions to improve operational efficiency.',
        technologies: 'MERN Stack'
      }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;