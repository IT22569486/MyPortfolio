import React from 'react';
import './Skills.css';

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
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skills.map(skill => <div className="skill-item" key={skill}>{skill}</div>)}
      </div>
    </section>
  );
}

export default Skills;