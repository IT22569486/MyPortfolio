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

const ExperienceSection = styled.section`
  padding: 80px 50px;
  background-color: #1a1a1a;
  animation: ${fadeIn} 1s ease-in-out;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 50px;
    color: #fff;
    background: -webkit-linear-gradient(#00f7ff, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ExperienceItem = styled.div`
  background-color: #2c2c2c;
  padding: 30px;
  border-radius: 10px;
  border-left: 5px solid #00f7ff;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #00f7ff;
  margin-top: 0;
  margin-bottom: 5px;
`;

const Date = styled.p`
  font-style: italic;
  color: #aaa;
  margin-bottom: 20px;
`;

const Description = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #ccc;

  li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
`;

const Experience = () => {
  return (
    <ExperienceSection>
      <h2>Experience</h2>
      <ExperienceItem>
        <JobTitle>IFS R&D International | Undergraduate Trainee Software Engineer</JobTitle>
        <Date>Sep 2024 - Sep 2025</Date>
        <Description>
          <li>Performed bug fixing and provided application support for the IFS Enterprise System, enhancing system stability.</li>
          <li>Leveraged PL/SQL and IFS's proprietary Marble technology to diagnose and resolve complex system issues.</li>
          <li>Utilized a professional toolchain including Git, SourceTree, Jira, and Jenkins for version control and CI/CD pipelines.</li>
          <li>Authored and executed test scripts to validate data integrity and ensure system reliability before deployment.</li>
          <li>Collaborated with a senior mentor and cross-functional teams to enhance technical and problem-solving skills.</li>
        </Description>
      </ExperienceItem>
    </ExperienceSection>
  );
}

export default Experience;