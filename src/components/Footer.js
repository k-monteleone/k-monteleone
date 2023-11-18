import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/WorkExperience'>Career <i class="lni lni-java"></i></Link>
            <Link to='/Hobbies'>Hobbies <i class="lni lni-headphone"></i></Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/Contact'>Email <i class="lni lni-envelope"></i></Link>
            <Link to='/Contact'>Phone <i class="lni lni-phone"></i></Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.linkedin.com/in/kyle-monteleone-a63034154/'  target="_blank" rel="noreferrer">LinkedIn <i class="lni lni-linkedin-original"></i></a>
            <Link to='/Resume'>Resume <i class="lni lni-download"></i></Link>
            <a href='https://www.linkedin.com/in/kyle-monteleone-a63034154/'  target="_blank" rel="noreferrer">Website <i class="lni lni-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;