import React from 'react'
import img1 from "../../media/tcs logo.jpg"
import "./Experience.css"

const Experiencepage = () => {
  return (
    <div>
      <h3>Experience</h3>
      <div className='Experience-main'>
        <div className='Experience-flex'>
          <div>
            <div className="cube">
              <div className="face front"><img className='tcs-image rotate-image' alt='tcslogo' src={img1} /></div>
              <div className="face back"><img className='tcs-image rotate-image' alt='tcslogo' src={img1} /></div>
              <div className="face right"><img className='tcs-image rotate-image' alt='tcslogo' src={img1} /></div>
              <div className="face left"><img className='tcs-image rotate-image' alt='tcslogo' src={img1} /></div>
              <div className="face top"><img className='tcs-image rotate-image' alt='tcslogo' src={img1} /></div>
              <div className="face bottom"><img className='tcs-image rotate-image' alt='tcslogo' src={img1} /></div>
            </div>
            <span>
              <p className='Experience-description'>
                <strong>Tata Consultancy Services</strong><br />
                Full Stack Developer<br />
                Dec 2021 – Present<br />
                Bengaluru, India<br />
                <ul>
                  <li>Developed and implemented webpages and made essential modifications using React, taking ownership of end-to-end functionality.</li>
                  <li>Proficient in leading frameworks like React JS, building scalable, reusable components, and front-end solutions. Utilized React JS resources for data access, and standardized interfaces, and worked on responsive web apps using MaterialUI, Bootstrap/CSS3, and HTML5.</li>
                  <li>Implemented React JS Controllers for view data maintenance, handled UI mock-ups, integrated third-party React libraries, and managed Redux store data for state management. Utilized asynchronous programming, and Typescript.</li>
                  <li>Engineered a full-stack e-commerce web application with a UI for the forms. Utilized Node.js, Express.js, and PostgreSQL for backend and REST APIs in CRM Domain(D365).</li>
                  <li>Implemented load balancing for reliability, collaborating with a 3-member team through frequent discussions to ensure a comprehensive understanding of the overall application. Coordinated efficient sprint planning and tight deadlines to successfully complete the project, emphasizing teamwork and effective communication.</li>
                  <li>Implemented the backend using Node.js and leveraged Express.js for efficient server-side routing and API development, significantly enhancing data transfer efficiency and performance, contributing to the overall optimization of the system.</li>
                </ul>
                <strong>NielsenIQ Project</strong><br />
                Software Engineer<br />
                May 2023 – Present<br />
                <ul>
                  <li>Worked as a form developer on the NielsenIQ project, contributing to both frontend and backend development tasks.</li>
                  <li>Proficient in React.js for building the frontend interface of the CRM project, ensuring a user-friendly experience.</li>
                  <li>Experienced in Node.js for backend development, handling server-side logic and database interactions.</li>
                  <li>Utilized Jenkins for efficient code deployment, ensuring seamless integration of new features and updates.</li>
                  <li>Collected project requirements from Jira boards, sprint tracking, and other agile methodologies, ensuring alignment with project goals and timelines.</li>
                  <li>Managed codebase using GitHub.</li>
                  <li>Familiar with NielsenIQ as a CRM-related company, understanding its business focus and industry context.</li>
                </ul>
                <strong>Verizon Project</strong><br />
                Software Engineer<br />
                Feb 2022 – Apr 2023<br />
                <ul>
                  <li>Developed and maintained frontend components using React.js for the Verizon Project, ensuring a smooth user experience and meeting project requirements.</li>
                  <li>Implemented Redux for state management in the React.js application, optimizing data flow and scalability.</li>
                  <li>Contributed to the design and implementation of RESTful APIs in Node.js, enabling efficient data retrieval and manipulation.</li>
                  <li>Examined user needs and software requirements to estimate design feasibility and budget constraints.</li>
                  <li>Determined the design & layout of web applications using HTML, CSS & JavaScript with 100% accuracy.</li>
                  <li>Worked on various Dashboards using React JS with backend on Node JS. Designed & developed Dashboards using React JS & MUI Template.</li>
                </ul>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiencepage
