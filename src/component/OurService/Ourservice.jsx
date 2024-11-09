import React from 'react'
import bedimg from '../../assets/bed.png'
import apartment from '../../assets/apartment.png'
import homeimg from '../../assets/home-icon.png'
import './OurService.css'
const Ourservice = () => {
  return (
    <div>
        <div className="service-main-box">
            <div className="heading">
                <span>our services</span>
                <h1>One-stop Tech-Based Construction and Design Services</h1>
                <div className="service-boxes">
                <div className="service-box">
                       <div className="service-box-img">
                       <img src={homeimg} alt="" />
                       </div>
                       <h3>Residential Construction</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia voluptatibus voluptatem libero sit nulla.</p>
                    </div>
                    <div className="service-box">
                       <div className="service-box-img">
                       <img src={apartment} alt="" />
                       </div>
                       <h3>Residential Construction</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia voluptatibus voluptatem libero sit nulla.</p>
                    </div>
                    <div className="service-box">
                       <div className="service-box-img">
                       <img src={bedimg} alt="" />
                       </div>
                       <h3>Residential Construction</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia voluptatibus voluptatem libero sit nulla.</p>
                    </div>
                </div>
            

            </div>
        </div>
    </div>
  )
}

export default Ourservice