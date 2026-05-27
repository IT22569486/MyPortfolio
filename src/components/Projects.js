import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProjectsSection = styled.section`
  padding: 80px 50px;
  background-color: #1a1a1a;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 50px;
    color: #fff;
    background: -webkit-linear-gradient(#00f7ff, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
`;

const ProjectCard = styled.div`
  background-color: #2c2c2c;
  padding: 30px;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    border-color: #00f7ff;
    box-shadow: 0 0 20px rgba(0, 247, 255, 0.5);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #00f7ff;
  margin-top: 0;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 20px;
`;

const Technologies = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #00f7ff;
  
  strong {
    font-weight: 700;
  }
`;

const ProjectLink = styled.a`
  font-size: 0.9rem;
  font-weight: 500;
  color: #00f7ff;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
  transition: color 0.3s;

  &:hover {
    color: #ff00ff;
    text-decoration: underline;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Bus Tracking System with Occupancy & Arrival Time Prediction',
      description: 'Developing a real-time bus tracking and predictive analytics system to estimate arrival times and passenger occupancy for Sri Lankan public buses. Applied LSTM, LightGBM, and XGBoost models on large scale SLTB ticketing data to forecast arrival times and passenger demand. Built a data preprocessing to generate trip and stop-level records and integrated predictions into a mobile application for live tracking and crowd insights.',
      technologies: 'LSTM, LightGBM, XGBoost',
      link: ''
    },
    {
      title: 'Country Explorer',
      description: 'This project was developed as part of my journey to strengthen frontend development fundamentals while also implementing a simple user-authenticated backend. The application provides a smooth and interactive way to explore countries around the world, view their details, and see their flags in a visually engaging interface.',
      technologies: 'React.js, Node.js, Express.js, MongoDB Atlas, JWT / OAuth',
      link: 'https://github.com/IT22569486/AFReactFrontendProject'
    },
    {
        title: 'GreenEn – Urban Area\'s Garbage Management System',
        description: 'Proud to present our ITP Y3S1 CSSE project, GreenEn, an urban garbage management system developed to optimize and modernize waste management processes in city environments. The system is designed to improve efficiency, support sustainability, and enhance overall cleanliness in urban areas.',
        technologies: 'React.js, Node.js, Express.js, MongoDB Atlas, AUTH0',
        link: 'https://github.com/IT22569486/CSSEPROJECT'
    },
    {
      title: 'CricSL – Online Cricket Club Management System',
      description: 'We are excited to share our ITP Y2S2 project, CricSL, an online cricket club management system designed to streamline and enhance the management of cricket teams and activities.',
      technologies: 'React.js, MongoDB, Express.js, Node.js, .mui',
      link: 'https://github.com/SandaruAbey/ITP_Project_Update'
    },
    {
      title: 'Cricket Scoring System',
      description: 'Developing a web-based cricket scoring system using .NET for backend services and Angular for the frontend. Implementing core match scoring features with a focus on accuracy, real-time updates, and usability.',
      technologies: '.NET, Angular',
      link: ''
    },
    {
      title: 'Cricket Club Management System',
      description: 'Engineered a full-stack web application using React, Node.js, Express, and MongoDB to streamline cricket club operations. Implemented player performance tracking and automated report generation, providing coaches with actionable insights. Utilized Redux for state management to ensure consistent user experience across different user roles.',
      technologies: 'MERN Stack, Redux',
      link: ''
    },
    {
        title: 'Urban Area\'s Garbage Management System',
        description: 'Developed a system featuring QR-code-based trash bin registration and dynamic route optimization for collection trucks. Built an analytics dashboard for city administrators, enabling data-driven decisions to improve operational efficiency.',
        technologies: 'MERN Stack',
        link: ''
      }
  ];

  return (
    <ProjectsSection>
      <h2>Projects</h2>
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard key={project.title}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <Technologies><strong>Technologies:</strong> {project.technologies}</Technologies>
            {project.link && <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</ProjectLink>}
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;