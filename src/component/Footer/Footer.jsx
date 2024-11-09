import React from 'react';
import bhogalpng from '../../assets/Bhogal.png';
import logoimg from '../../assets/logo.png';
import linkdin from '../../assets/linkdin.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-footer-box">
        <div className="footer-content">

          <div className="footer-box1">
            <img src={logoimg} alt="Company Logo" />
            <p>2728 Hickory Street, Salt Lake City, UT 84104</p>
            
            <span>
              <i className="ri-phone-line"></i> 0451 700 777
            </span>
        
            <span>
              <i className="ri-mail-line"></i> info@bhogalbuilders.com.au
            </span>
          </div>

          <div className="footer-box2">
            <ul>
            <h2>Quick Links</h2>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Listings</Link></li>
              <li><Link to="/">Services</Link></li>
              <li><Link to="/">Blogs</Link></li>
            </ul>
</div>
<div className='footer-box4'>
    
        
            <ul>
            <h2>Services</h2>
              <li><Link to="/">Residential Construction</Link></li>
              <li><Link to="/">Commercial Construction</Link></li>
              <li><Link to="/">Project Management</Link></li>
            </ul>
          </div>
          

          <div className="footer-box3">
            <h2>Subscribe to our Newsletter!</h2>
            <form action="#">
              <input type="email" placeholder="Email Address" name="email" required />
              <button type="submit" className="newsletter-submit">
                <i className="ri-arrow-right-line"></i>
              </button>
            </form>
            <h3>Follow Us on</h3>
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkdin} alt="LinkedIn" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copy-right">
          <div className="footer-copy-right-right">
            <p>
              <img src={bhogalpng} alt="Bhogal Builders" />
            </p>
          </div>
          <div className="footer-copy-right-left">
            <ul>
              <li><Link to="/">Terms and Conditions</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
