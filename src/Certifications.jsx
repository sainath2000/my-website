import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal';

function VCModal(props) {
    
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton className=' border-bottom-0 pb-0 bg-light'>{ props.headText}</Modal.Header>
        <Modal.Body className=' text-center bg-light'>
          <img src={props.imgurl} width="70%" height="50%" alt='modal pictur alt text' />
        </Modal.Body>   
      </Modal>
    </>
  )
}


export default function Certifications() {
  const [modalShow, setModalShow] = React.useState(false);
  const [header, setHeader] = React.useState(null);
  const [Iurl, setIUrl] = React.useState(null);
  return (
    <>
      <VCModal show={modalShow} imgurl={Iurl} headtext={header} onHide={() => setModalShow(false)} />
      <div className="row justify-content-evenly mt-3 mb-5" style={{ width: "100%", margin: "auto" }}>
        
        <div className="p-0 col-8 col-sm-4 col-md-4 col-lg-3 m-3 text-center" >
          <Card className=' h-100' style={{backgroundColor:"white"}}>
            <Card.Img variant="top" className=' w-50 mt-3 mb-3 m-auto' src='./edx_python.png' />
            <Card.Body>
              <Card.Text className=''>Basics of Data Science describes about numpy library. It also covers basics about pandas, matplotlib</Card.Text>
              <Button variant="secondary" className=' w-100' onClick={() => { setModalShow(true); setHeader("hello"); setIUrl("./edx_python.png"); }}>Basics of Data Science</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="p-0 col-8 col-sm-4 col-md-4 col-lg-3 m-3 text-center" >
          <Card className=' h-100' style={{backgroundColor:"white"}}>
            <Card.Img variant="top" className=' w-50 mt-3 mb-3 m-auto' src='./python_data_structures.png' />
            <Card.Body>
              <Card.Text className=''>Detailed explanation of python data structures like list, tuples, set and dictionaries</Card.Text>
              <Button variant="secondary" className=' w-100' onClick={() => { setModalShow(true); setHeader("hello"); setIUrl("./python_data_structures.png"); }}>Python Data Structures</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="p-0 col-8 col-sm-4 col-md-4 col-lg-3 m-3 text-center" >
          <Card className=' h-100' style={{backgroundColor:"white"}}>
            <Card.Img variant="top" className=' w-50 mt-3 mb-3 m-auto' src='./python_basic_hacker_rank.png' />
            <Card.Body>
              <Card.Text className=''>Getting started with python modules includes basics functions, conditional statements, loops etc</Card.Text>
              <Button variant="secondary" className=' w-100' onClick={() => { setModalShow(true); setHeader("hello");setIUrl("./python_basic_hacker_rank.png"); }}>Basics of Python</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="p-0 col-8 col-sm-4 col-md-4 col-lg-3 m-3 text-center" >
          <Card className=' h-100' style={{backgroundColor:"white"}}>
            <Card.Img variant="top" className=' w-50 mt-3 mb-3 m-auto' src='./sap_abap.png' />
            <Card.Body>
              <Card.Text className=''>SAP ABAP training module contains functional and object oriented components</Card.Text>
              <Button variant="secondary" className=' w-100' onClick={() => { setModalShow(true); setHeader("hello");setIUrl("./sap_abap.png"); }}>SAP ABAP Certification</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="p-0 col-8 col-sm-4 col-md-4 col-lg-3 m-3 text-center" >
          <Card className=' h-100' style={{backgroundColor:"white"}}>
            <Card.Img variant="top" className=' w-50 mt-3 mb-3 m-auto' src='./sql_basics.png' />
            <Card.Body>
              <Card.Text className=''>SQL basics contains DDL statements creating, updating, deleting table and DML statements</Card.Text>
              <Button variant="secondary" className=' w-100' onClick={() => { setModalShow(true); setHeader("hello");setIUrl("./sql_basics.png"); }}>Basics of SQL</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="p-0 col-8 col-sm-4 col-md-4 col-lg-3 m-3 text-center" >
          <Card className=' h-100' style={{backgroundColor:"white"}}>
            <Card.Img variant="top" className=' w-50 mt-3 mb-3 m-auto' src='./linux.png' />
            <Card.Body>
              <Card.Text className=''>Basics of linux includes shell commands on file system, navigation, file manipulation</Card.Text>
              <Button variant="secondary" className=' w-100' onClick={() => { setModalShow(true); setHeader("hello");setIUrl("./linux.png"); }}>Basics of Linux</Button>
            </Card.Body>
          </Card>
        </div> 
      </div>
      
    </>
  )
}
