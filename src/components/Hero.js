import React from 'react';
import styled, { keyframes } from 'styled-components';
import profilePic from '../images/profile.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 50px;
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
  color: #fff;
  animation: ${fadeIn} 1s ease-in-out;
`;

const HeroText = styled.div`
  max-width: 600px;
  margin-right: 50px;
  text-align: left;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
    background: -webkit-linear-gradient(#00f7ff, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 30px;
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #00f7ff, 0 0 10px #00f7ff, 0 0 15px #00f7ff;
  }
  100% {
    box-shadow: 0 0 20px #00f7ff, 0 0 30px #00f7ff, 0 0 40px #00f7ff;
  }
`;

const CTAButton = styled.button`
  background-color: transparent;
  color: #00f7ff;
  border: 2px solid #00f7ff;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  animation: ${glow} 1.5s infinite alternate;

  &:hover {
    background-color: #00f7ff;
    color: #1a1a1a;
    transform: scale(1.05);
  }
`;

const HeroImage = styled.div`
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 5px solid #00f7ff;
    box-shadow: 0 0 20px #00f7ff;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        <h1>JAYAISURU SAMARAKOON</h1>
        <p>I am a motivated and detail-oriented Software Engineering undergraduate with strong experience in full stack development, deep learning, and data driven system design. I have hands on experience in building real-time, scalable applications using the MERN stack, along with practical exposure to machine learning based predictive systems through my undergraduate research project. I have gained industry experience at IFS R&D International, I am eager to apply my technical, analytical, and problem-solving skills as an Associate/Intern Software Engineer.</p>
        <CTAButton>Let's get started</CTAButton>
      </HeroText>
      <HeroImage>
        <img src={profilePic} alt="JAYAISURU SAMARAKOON" />
      </HeroImage>
    </HeroContainer>
  );
}

export default Hero;