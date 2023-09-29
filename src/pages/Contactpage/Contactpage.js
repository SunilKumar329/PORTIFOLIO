import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
import {MdContactMail, MdContactPhone } from 'react-icons/md';
import "./Contact.css"
import { TypeAnimation } from 'react-type-animation';
const Contactpage = () => {
  return (
    <div className='Contact-main'>
          <TypeAnimation
        className='app-header'
  sequence={["Contact Details", 1000, ' ', 500]}
  style={{ fontSize: '2em' }}
  speed={55}
  repeat={Infinity}
/>
      {/* <h1>Contact Details</h1> */}
      <div className='contact-sb'>
        
          <div className='Contact-flex'>
            <MdContactPhone />
            <a id="id1"href='+91 7989638760'><h2>+91 7989638760</h2></a>
          </div>
          <div className='Contact-flex'>
            <MdContactMail/>
            <a id="id1"href='tskumar329@gmail.com'><h2>tskumar329@gmail.com</h2></a>
          </div>
          <div className='Contact-flex'>
            <AiFillLinkedin/>
            <a id="id1"href='www.linkedin.com/in/t-sunil-kumar'><h2>Linkedin</h2></a>
          </div>
      </div>

    </div>
  )
}

export default Contactpage