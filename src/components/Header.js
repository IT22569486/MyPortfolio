import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaBehanceSquare, FaTwitterSquare } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #1a1a1a;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: #00f7ff;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #00f7ff;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    color: #00f7ff;
    transform: scale(1.2);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li><NavLink href="#home">Home</NavLink></li>
          <li><NavLink href="#case-studies">Case Studies</NavLink></li>
          <li><NavLink href="#testimonials">Testimonials</NavLink></li>
          <li><NavLink href="#recent-work">Recent work</NavLink></li>
          <li><NavLink href="#get-in-touch">Get In Touch</NavLink></li>
        </ul>
      </Nav>
      <SocialLinks>
        <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialLink>
        <SocialLink href="https://www.behance.net" target="_blank" rel="noopener noreferrer"><FaBehanceSquare /></SocialLink>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></SocialLink>
      </SocialLinks>
    </HeaderContainer>
  );
}

export default Header;