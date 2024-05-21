import React from 'react';
import pic from "../../media/WhatsApp Image 2023-09-19 at 12.37.40 - Copy.jpeg";
import "./Aboutpage.css";

const Aboutpage = () => {
  return (
    <div className='main'>
      <div className='Aboutpage-main'>
        <div className='Aboutpage-image-container'>
          <img className='Aboutpage-image' alt="no image" src={pic} />
        </div>
        <div className='Aboutpage-content'>
          <h1 className='Aboutpage-about'>
            <span className="heading-bold">Hi, I'm Sunil Kumar</span>
          </h1>
          <p className='Aboutpage-description'>
            <span className="main-bold">2.5 years of experience in the software domain as a Full Stack Developer.</span><br /><br />
            Proficient in:
            <ul>
              <li><span className="main-bold">HTML5, CSS3, Bootstrap,</span></li>
              <li><span className="main-bold">JavaScript, ReactJS,</span></li>
              <li><span className="main-bold">Git, GitHub,</span></li>
              <li><span className="main-bold">Data Structures and Algorithms,</span></li>
              <li><span className="main-bold">NodeJS, ExpressJS,</span></li>
              <li><span className="main-bold">Object-Oriented Programming,</span></li>
              <li><span className="main-bold">Python,</span></li>
              <li><span className="main-bold">Material UI,</span></li>
              <li><span className="main-bold">Database Management Systems,</span></li>
              <li><span className="main-bold">MongoDB, MySQL,</span></li>
              <li><span className="main-bold">Asynchronous Programming,</span></li>
              <li><span className="main-bold">Typescript,</span></li>
              <li><span className="main-bold">Responsive Web Design,</span></li>
              <li><span className="main-bold">RESTful API Development,</span></li>
              <li><span className="main-bold">PostgreSQL,</span></li>
              <li><span className="main-bold">Agile Methodologies,</span></li>
              <li><span className="main-bold">Jira,</span></li>
              <li><span className="main-bold">Jenkins.</span></li>
            </ul>
            Familiar with <span className="light-bold">Redux, third-party React libraries, and state management.</span><br /><br />
            Enthusiastic about building scalable, <span className="main-bold">reusable</span> components and front-end solutions, ensuring a user-friendly experience through <span className="main-bold">Responsive web design.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
