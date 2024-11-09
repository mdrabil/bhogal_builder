import React from 'react';
import './Images.css';
import customer1 from '../../assets/Ellipse 3.png';
import customer2 from '../../assets/Ellipse 4.png';
import customer3 from '../../assets/Ellipse 5.png';
import customer4 from '../../assets/Ellipse 6.png';
import customer5 from '../../assets/Ellipse 7.png';
import building from '../../assets/building.jpg';

const Images = () => {
  const images = [
    { src: customer1, alt: 'Customer 1' },
    { src: customer2, alt: 'Customer 2' },
    { src: customer3, alt: 'Customer 3' },
    { src: customer4, alt: 'Customer 4' },

  ];

  return (
 <div className='home-images-customer'>
       <div className="home-bottom-left">
      <div className="customer-gallery">
        {images.slice(0,5).map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
        <div className="more-overlay">+</div>
      </div>
      <div className="customer-text">
        <h3>72k+ happy <br /> customers</h3>
      </div>
    </div>


    <div className="home-bottom-right">
    {/* <div className="customer-gallery">
         */}
          <div className="image-item" style={{width:'50px',height:'50px'}}>
            <img src={building} alt='not upload' />
     
      </div>

      <div className="customer-text">
        <h3>200 + Successfully<br /> Cumpleted Projects</h3>
      </div>
    </div>
 {/* </div> */}

 </div>
  )
};

export default Images;
