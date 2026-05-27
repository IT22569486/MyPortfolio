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

const EducationSection = styled.section`
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

const EducationItem = styled.div`
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

const Degree = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #00f7ff;
  margin-top: 0;
  margin-bottom: 10px;
`;

const Institution = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 5px;
`;

const Details = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin: 0;
`;

const Education = () => {
  return (
    <EducationSection>
      <h2>Education</h2>
      <EducationItem>
        <Degree>Bachelor of Science in Information Technology (Specialization in Software Engineering)</Degree>
        <Institution>Sri Lanka Institute of Information Technology (SLIIT), Malabe</Institution>
        <Details>Cumulative GPA: 3.00</Details>
      </EducationItem>
      <EducationItem>
        <Degree>GCE A/L (Physical science)</Degree>
        <Institution>Kegalle Maha Vidyalaya</Institution>
        <Details>Result - BBC</Details>
      </EducationItem>
    </EducationSection>
  );
}

export default Education;