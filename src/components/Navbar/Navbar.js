import React from 'react'
import { GrMail} from 'react-icons/gr';
import {MdContactPhone } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='main-container'>
        <div className='Nav-left'>
            <GrMail />
            <a id="idtag"href='tskumar329@gmail.com'>tskumar329@gmail.com</a>
        </div>
        <div className='Nav-middle'>
            <MdContactPhone/>
            <a id="idtag"href='+917989638760'>+91 7989638760</a>
        </div>
        <div className='Nav-right'>
            <AiFillLinkedin />
            <a id="idtag" href='www.linkedin.com/in/t-sunil-kumar'>Linkedin</a>
        </div>
    </div>
  )
}

export default Navbar