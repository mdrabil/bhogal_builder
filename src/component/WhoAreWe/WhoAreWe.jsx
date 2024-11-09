import React from 'react';
import './WhoAreWe.css';
import qualityimg from '../../assets/qualityimg.png'
import weuser from '../../assets/user-we-are.png'
import rectangle1 from '../../assets/Rectangle 14.png'
import rectangle2 from '../../assets/Rectangle 15.png'
import rectangle3 from '../../assets/Rectangle 16.png'

const WhoAreWe = () => {
  return (
    <section className="who-are-we-section">
      <div className="who-are-we-box">
        
        {/* Left Content Box */}
        <div className="who-are-left-box">
          <span className="who-are-title">Who Are We</span>
          <h1 className="who-are-heading">Assisting Individuals in Locating the Appropriate Buildings</h1>
          <p className="who-are-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aperiam, dolore mollitia magnam quas 
            illo beatae tempora eveniet repudiandae maxime totam veniam vero culpa ullam enim velit sed ab perspiciatis?
          </p>

          <div className="feature-box">
            <img src={qualityimg} alt="Quality" />
            <div className="feature-content">
              <h3>Quality</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nemo, consequatur velit iste nesciunt facilis.</p>
            </div>
          </div>

          <div className="feature-box">
            <img src={weuser} alt="Affordability" />
            <div className="feature-content">
              <h3>Affordability</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nemo, consequatur velit iste nesciunt facilis.</p>
            </div>
          </div>
        </div>
        
        {/* Right Content Box */}
        <div className="who-are-right-box">
          <div className="big-image">
            <img src={rectangle1} alt="Main Building" />
          </div>
          <div className="small-images">
            
            <img src={rectangle2} alt="Building" />
            <img src={rectangle3} alt="Building" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhoAreWe;
