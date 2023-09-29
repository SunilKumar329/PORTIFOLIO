import React from 'react'
import pic from "../../media/WhatsApp Image 2023-09-19 at 12.37.40 - Copy.jpeg"
import "./Aboutpage.css"
const Aboutpage = () => {
  return (
    <div className='main'>
      <div className='Aboutpage-main'>
          <img className='Aboutpage-image' height={400} width={300}  alt="no image" src={pic} />
          <h1 className='Aboutpage-about'> 
              Hi, I'm Sunil Kumar

              2 years of experience in the software domain as a Full stack developer.

              Proficient in HTML5, CSS3, Bootstrap,JavaScript, ReactJS, Git, GitHub, Data Structures and Algorithms, NodeJS, ExpressJS, and Object-Oriented Programming.

              Familiar with Python, Redux, Material UI, Database Management Systems, MongoDB, and MySQL
          </h1>
      </div>
    </div>
  )
}

export default Aboutpage