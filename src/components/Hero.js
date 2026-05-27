import React from 'react';
import './Hero.css';
import profilePic from '../images/profile.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>JAYAISURU SAMARAKOON</h1>
        <p>I am a motivated and detail-oriented Software Engineering undergraduate with strong experience in full stack development, deep learning, and data driven system design. I have hands on experience in building real-time, scalable applications using the MERN stack, along with practical exposure to machine learning based predictive systems through my undergraduate research project. I have gained industry experience at IFS R&D International, I am eager to apply my technical, analytical, and problem-solving skills as an Associate/Intern Software Engineer.</p>
        <button className="cta-button">Let's get started</button>
      </div>
      <div className="hero-image">
        <img src={profilePic} alt="Your Name" />
      </div>
    </section>
  );
}

export default Hero;