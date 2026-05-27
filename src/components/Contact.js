import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ContactSection = styled.section`
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

const ContactInfo = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContactItem = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ContactLink = styled.a`
  color: #00f7ff;
  text-decoration: none;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #ff00ff;
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <h2>Get In Touch</h2>
      <ContactInfo>
        <ContactItem>Email: <ContactLink href="mailto:jayaisurusamarakoon7@gmail.com">jayaisurusamarakoon7@gmail.com</ContactLink></ContactItem>
        <ContactItem>Phone: 0719011933</ContactItem>
        <ContactItem>
          <ContactLink href="https://linkedin.com/in/jayaisuru-samarakoon-8665b2313" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> 
            linkedin.com/in/jayaisuru-samarakoon-8665b2313
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLink href="https://github.com/IT22569486" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            github.com/IT22569486
            </ContactLink>
        </ContactItem>
      </ContactInfo>
    </ContactSection>
  );
}

export default Contact;