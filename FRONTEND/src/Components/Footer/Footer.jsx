// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className='des'>Commercial and residential interior design studio. Listening, understanding, reinventing and <br />creating are the foundations that drive our thinking.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com"><FaFacebook /></a>
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
        </div>
        <p className='copy'>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
