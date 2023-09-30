import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Experiencepage from './pages/Experiencepage/Experiencepage';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Skillspage from './pages/Skillpage/Skillpage';
import Mainnav from './components/Mainnav/Mainnav';
import { TypeAnimation } from 'react-type-animation'; 
import Contactpage from './pages/Contactpage/Contactpage';
import {HashRouter} from 'react-router-dom';
function HomePage() {
  return ( 
    <div>
      <Navbar />
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
                <HashRouter>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/about" component={Aboutpage } />
                  <Route exact path="/experience" component={Experiencepage} />
                  <Route exact path="/skills" component={Skillspage} />
                  <Route exact path="/contact" component={Contactpage} />
                </HashRouter>
              </div>
      </Router>
  );
}

export default App;
