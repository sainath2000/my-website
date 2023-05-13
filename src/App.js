import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import React from 'react'
import './styled.css';
import Certifications from './Certifications';
import Projects from './Projects';
import Homepage from './Homepage';
import About from './About';
import Modaltest from './Modaltest';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="test" element={<About />}></Route>
        <Route path="check" element={<Projects />}></Route>
        <Route path="certifications" element={<Certifications />}></Route>
        <Route path="modaltest" element={<Modaltest/>}></Route>
      
      </Routes>
    </Router> 
  );
}

export default App;
