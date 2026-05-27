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

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    border-color: #00f7ff;
    box-shadow: 0 0 15px #00f7ff;
  }
`;

const SkillName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  margin: 0;
`;

const Skills = () => {
  const skills = [
    'Java', 'C#', 'JavaScript', 'Python', 'C++', 'C',
    'HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'RESTful APIs',
    'MongoDB', 'Firebase', 'MySQL', 'Oracle DB',
    'MERN Stack', 'ASP .net Core',
    'Git', 'Jira', 'SourceTree', 'Postman', 'Figma', 'VS Code', 'IntelliJ',
    'Agile/Scrum', 'Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'CI/CD'
  ];

  return (
    <SkillsSection>
      <h2>Technical Skills</h2>
      <SkillsGrid>
        {skills.map(skill => (
          <SkillCard key={skill}>
            <SkillName>{skill}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;