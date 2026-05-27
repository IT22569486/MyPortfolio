import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#recent-work">Recent work</a></li>
          <li><a href="#get-in-touch">Get In Touch</a></li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Bē</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">t</a>
      </div>
    </header>
  );
}

export default Header;