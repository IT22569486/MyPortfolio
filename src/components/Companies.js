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

const CompaniesSection = styled.section`
  text-align: center;
  padding: 50px;
  background-color: #1a1a1a;
  color: #fff;
  animation: ${fadeIn} 1s ease-in-out;

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #ccc;
  }
`;

const CompanyLogos = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
`;

const CompanyLogo = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #00f7ff;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Companies = () => {
  return (
    <CompaniesSection>
      <p>Worked with</p>
      <CompanyLogos>
        <CompanyLogo>IFS</CompanyLogo>
      </CompanyLogos>
    </CompaniesSection>
  );
}

export default Companies;