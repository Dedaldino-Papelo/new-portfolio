import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skill from './components/Skills/Skill';
import Projects from './components/projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
