import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Projects from './Projects';
import Certifications from './Certifications';
import About from './About';
import './styled.css'



export default function Homepage() {
    const [expanded, setExpanded] = useState(false);
    const [toggleState, setToggleState] = useState(1);
    document.body.style.backgroundColor="white"
    const toggleTab = (index) => {
        setToggleState(index);
    };
    
  return (
    <>
        {/* navbar section #517ca7  #152450   2774AE*/}
        <Navbar expanded={expanded} style={{backgroundColor:"#d7ebf5"}}  expand="lg" className=' p-4 d-flex align-items-center' collapseOnSelect={true}>
            <Container >
                <Navbar.Brand href="#home" style={{color:"#152450"}} >Sainath Reddy Peddireddy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse  id="basic-navbar-nav" style={{flexGrow:0}} >
                    <Nav fill variant="tabs" className=' border-0 '>
                        <Nav.Item><Nav.Link onClick={() => setExpanded(false)} className=' me-4 rounded-0 border-0'><button style={{color:"black"}} className={toggleState === 1 ? "profile-sideLinkButton profile-active-tabs" : "profile-sideLinkButton"} onClick={() => toggleTab(1)}>About me</button></Nav.Link>                    </Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setExpanded(false)} className=' me-4 rounded-0 border-0'><button style={{color:"black"}} className={toggleState === 2 ? "profile-sideLinkButton profile-active-tabs" : "profile-sideLinkButton"} onClick={() => toggleTab(2)}>Projects</button></Nav.Link>                    </Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setExpanded(false)} className=' me-4 rounded-0 border-0'><button style={{color:"black"}} className={toggleState === 3 ? "profile-sideLinkButton profile-active-tabs" : "profile-sideLinkButton"} onClick={() => toggleTab(3)}>Certifications</button></Nav.Link>                    </Nav.Item>
                        <Nav.Item className=' ms-4'><a href='./resume.pdf' className='resume-a me-4 rounded-0 border-0 text-white text-decoration-none' target="_blank" rel="noreferrer"><Button variant="outline-secondary" >Resume</Button></a></Nav.Item>
                    </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>


        {/* About me content  */}
        <div className={toggleState === 1 ? "profile-tab  profile-activeTab" : "profile-tab"}>
            <About/>
        </div>

        {/* Projects content  */}
        <div className={toggleState === 2 ? "profile-tab  profile-activeTab" : "profile-tab"}>
            <Projects/>      
        </div>
        
        {/* Certifications content  */}
        <div className={toggleState === 3 ? "profile-tab  profile-activeTab" : "profile-tab"} >
            <Certifications/>              
        </div>

        
    </>
  )
}
