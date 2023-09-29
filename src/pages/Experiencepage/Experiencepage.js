
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
            <div class="cube">
                <div class="face front"><img  className='tcs-image rotate-image' alt='tcslogo' src={img1}/></div>
                <div class="face back"><img  className='tcs-image rotate-image' alt='tcslogo' src={img1}/></div>
                <div class="face right"><img  className='tcs-image rotate-image' alt='tcslogo' src={img1}/></div>
                <div class="face left"><img  className='tcs-image rotate-image' alt='tcslogo' src={img1}/></div>
                <div class="face top"><img  className='tcs-image rotate-image' alt='tcslogo' src={img1}/></div>
                <div class="face bottom"><img  className='tcs-image rotate-image' alt='tcslogo' src={img1}/></div>
            </div>
              <span>
                <p className='Experience-description'>Tata Consultancy Services
                    Full Stack Developer
                    Dec 2021 – Present
                    Bengaluru, India
                    •Developed and implemented webpages and as well as made essential modifications using React. 
                    •Implemented the backend using Node.js and leveraged Express.js for efficient server-side routing and API development, this approach significantly enhanced data transfer efficiency and performance,
                    contributing to the overall optimization of the system. 
                </p>
                </span>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Experiencepage