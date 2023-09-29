import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Mainnav.css';
import { BiMenu} from 'react-icons/bi';

const Mainnav = () => {
  return (
    <div className='Mainnav-container'>
      <div className='Mainnav-left Mainnav-text'>
        {/* <p>PROFILE</p> */}
        <BiMenu />
      </div>
      <div className='Mainnav-right'>
        <Link id="lee"to="/"><p className='Mainnav-text'>Home</p></Link> {/* Link to the Home route */}
        <Link id="lee" to="/about"><p className='Mainnav-text'>About</p></Link> {/* Link to the About route */}
        <Link id="lee" to="/contact"><p className='Mainnav-text'>Contact</p></Link> {/* Link to the Contact route */}
      </div>
    </div>
  );
}

export default Mainnav;
