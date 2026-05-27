import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #1a1a1a;
    color: #fff;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Hero />
      <Companies />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </AppContainer>
  );
}

export default App;
