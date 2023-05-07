import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


export default function Modaltest() {
   
  return (
      <>
      <h1>hello</h1>
      
        <Typewriter words={['Eat', 'Sleep', 'Code', 'Repeat!']} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50}/>
      </>
  )
}

