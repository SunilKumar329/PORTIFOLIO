import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Experiencepage from './pages/Experiencepage/Experiencepage';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Skillspage from './pages/Skillpage/Skillpage';
import Mainnav from './components/Mainnav/Mainnav';
import { TypeAnimation } from 'react-type-animation'; 
import Contactpage from './pages/Contactpage/Contactpage';
function HomePage() {
  return ( 
    <div>
      <Navbar />
        {/* <h1 className='app-header'>Hello, I'm Sunil Kumar, a Fullstack Developer, and this is my Portfolio</h1> */}
        <TypeAnimation
        className='app-header'
  sequence={["Hello, I'm Sunil Kumar, a Fullstack Developer, and this is my Portfolio...", 1000, ' ', 500]}
  style={{ fontSize: '2em' }}
  speed={55}
  repeat={Infinity}
/>
      <Aboutpage />
      <Experiencepage />
      <Skillspage />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Mainnav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutpage />} /> {/* Home page */}
          <Route path="/experience" element={<Experiencepage />} /> {/* Experience page */}
          <Route path="/skills" element={<Skillspage />} /> {/* Skills page */}
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
