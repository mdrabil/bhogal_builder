import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Companies from '../Companies/Companies';
import image1 from '../../assets/construction.jpg';
import image2 from '../../assets/arc.png';
// import image2 from '../../assets/construction2.jpg';
import Images from './Images';
import Footer from '../Footer/Footer';
import WhoAreWe from '../WhoAreWe/WhoAreWe';
import RecentProject from '../RecentProject/RecentProject';
import Ourservice from '../OurService/Ourservice';
import NaighbarWood from '../NaighbarWood/NaighbarWood';
const Home = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu on link click (for mobile)
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const images = [image1, image2];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <div className="main-home-box">
 <div className="home-top-content">
      <div className="home-logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={`ri-menu-line ${isMenuOpen ? 'active' : ''}`} />
      </div>
      <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={activeLink === 'Home' ? 'active-link' : ''}
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={activeLink === 'About Us' ? 'active-link' : ''}
              onClick={() => handleLinkClick('About Us')}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={activeLink === 'Completed Construction Projects' ? 'active-link' : ''}
              onClick={() => handleLinkClick('Completed Construction Projects')}
            >
              Completed Construction Projects
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={activeLink === 'Under Construction Projects' ? 'active-link' : ''}
              onClick={() => handleLinkClick('Under Construction Projects')}
            >
              Under Construction Projects
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={activeLink === 'Renovation Projects' ? 'active-link' : ''}
              onClick={() => handleLinkClick('Renovation Projects')}
            >
              Renovation Projects
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={activeLink === 'Blogs' ? 'active-link' : ''}
              onClick={() => handleLinkClick('Blogs')}
            >
              Blogs
            </Link>
          </li>
          <div className="home-logo">
        <img src={logo} alt="Company Logo" />
      </div>
        </ul>
      </div>

    </div>


    <div className="home-middle-box">
    <div className="home-right">
        <h1>Find a perfect home you love...!</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam est iure </p>
        
        <div className="home-image-scroll">

          <div className="home-image-display-scroll" style={{ backgroundImage: `url(${images[currentImageIndex]})` }} >
          <div className="home-left-icon" onClick={handlePrevImage}>
            <i className="ri-arrow-left-s-line"></i>
          </div>
         
            <div className="home-right-icon" onClick={handleNextImage}>
            <i className="ri-arrow-right-s-line"></i>
          </div>
                </div>

                <div className="scroll-indicators">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={currentImageIndex === index ? 'active' : ''}
                  onClick={() => handleIndicatorClick(index)}
                ></span>
              ))}
            </div>
            
        </div>

      </div>

      <div className="home-left">
        <div className="home-login">
          <h3>Request for a Quote</h3>
          <hr />
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email Address" />
            <input type="number" placeholder="Your Phone Number" />
            <select name="dropdown">
              <option value="" disabled selected>
                Select Project Type
              </option>
              <option value="construction">Construction</option>
              <option value="renovation">Renovation</option>
            </select>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>

    <div className="home-bottom-box">
      <Images/>
    </div>
    <Companies/>
    <WhoAreWe/>
    <RecentProject/>
    <Ourservice/>
    <NaighbarWood/>
    <Footer/>
    </div>
  );
};

export default Home;



