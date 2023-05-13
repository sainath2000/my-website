import React from 'react' 
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMobileScreenButton, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Typewriter } from 'react-simple-typewriter'

export default function About() {

  return (
    <>
      {/* photo tab */}
      <div className=' text-white d-flex align-items-center justify-content-center' style={{backgroundImage:"url('./bgvpicture.jpg'",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"75vh"}} >
        <div className=' text-center'>
          <div className=' mb-3'><img className=' border rounded-circle' src='./myphoto.png' alt='' height={150} width={150} /></div>
          <p className='' style={{ fontSize: "20px" }}>I Am <span style={{ fontSize: "25px" }}><Typewriter words={['Developer', 'Tech Aspirant']} cursor cursorStyle='|' typeSpeed={100} deleteSpeed={100} loop={ true} /></span></p>
        </div>
        
      </div>
      {/* Skills tab  */}
      <div>
        <div className=' w-75 m-auto mt-3 mb-4 row'>
          <div className=' p-4 col-lg-6 col-sm-12'>
            <p> Hi There! I'm <span className=' fw-bold text-danger' style={{color:""}}>Sainath Reddy</span></p>
            <p className=' justify-content-center'> I am a professional developer from Hyderabad, India. I create beautiful professional websites and apps using best practice accessibility. I enjoy turning complex problems into simpler interface designs.</p>
            <div className=' d-flex justify-content-evenly w-75 mt-4 m-auto'>
              <p className=' border rounded-circle p-2'><a href='https://github.com/sainath2000' rel="noreferrer" target='_blank'><FontAwesomeIcon className=' text-danger' icon={faGithub} /></a></p>
              {/* <p className=' border rounded-circle p-2'><a className=' text-danger' href='https://www.linkedin.com/in/sainath-reddy-10748b213' rel="noreferrer" target='_blank'><FontAwesomeIcon style={{cursor:"pointer"}} icon={faLinkedin} /></a></p> */}
              <p className=' border rounded-circle p-2'><a href='mailto:dev.sainath.official1@gmail.com' className=' text-danger'><FontAwesomeIcon style={{cursor:"pointer"}} icon={faEnvelope} /></a></p>
              <p className=' border rounded-circle p-2'><a href='tel:+919515727145' className=' text-danger' ><FontAwesomeIcon style={{cursor:"pointer"}} icon={faPhone} /></a></p>
            </div>
          </div>
          <div className=' p-1 col-lg-6 col-sm-12'>
            <div className=' m-4'><ProgressBar animated now={60} label="PYTHON" /></div>
            <div className=' m-4'><ProgressBar animated now={40} label="HTML & CSS" /></div>
            <div className=' m-4'><ProgressBar animated now={30} label="REACT JS" /></div>
            <div className=' m-4'><ProgressBar animated now={30} label="SQL" /></div>
            <div className=' m-4'><ProgressBar animated now={25} label="R" /></div>
            <div className=' m-4'><ProgressBar animated now={25} label="SAP ABAP" /></div>
          </div>
        </div>
      </div>

      {/* my services card  */}
      <div className=' p-4 pt-5' style={{backgroundColor:"#e2e2e2"}}>
        <div className="row justify-content-evenly" style={{ width: "75%", margin: "auto" }}>
          <div className=' text-center'>
            <i className=' ps-2 pe-2 pt-1 pb-1' style={{fontSize:"13px",backgroundColor:"yellow",fontStyle:"normal"}}>What I Do ?</i>
            <p className=' fw-bolder fs-5 mt-2'>How I can help your next project</p>
          </div>
            
          <div className="p-0 col-8 col-sm-4 col-md-4 col-lg-3 m-3 text-center" >
            <Card className=' p-3'>
              <Card.Body>
                <span className=' p-3 border-0 rounded-circle' style={{backgroundColor:"gray"}}><FontAwesomeIcon className=' text-white' icon={faLaptopCode} /></span>
                <Card.Text className=' mt-4'>Web Development</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="p-0 col-8 col-sm-4 col-md-4 col-lg-3 m-3 text-center" >
            <Card className=' p-3'>
              <Card.Body>
                <span className=' p-3 border-0 rounded-circle' style={{backgroundColor:"gray"}}><FontAwesomeIcon className=' text-white' icon={faMobileScreenButton} /></span>
                <Card.Text className=' mt-4'>App Development</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="p-0 col-8 col-sm-4 col-md-4 col-lg-3 m-3 text-center" >
            <Card className=' p-3'>
              <Card.Body>
                <span className=' p-3 border-0 rounded-circle' style={{backgroundColor:"gray"}}><FontAwesomeIcon className=' text-white' icon={faChartLine} /></span>
                <Card.Text className=' mt-4'>Data Science</Card.Text>
              </Card.Body>
            </Card>
          </div>

          
        </div>
      </div>
      
    </>
  )
}



