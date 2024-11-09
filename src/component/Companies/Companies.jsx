import React from 'react';
import './Companies.css';
import image1 from '../../assets/image 1.png';
import image2 from '../../assets/image 2.png';
import image3 from '../../assets/image 3.png';
import image4 from '../../assets/image 4.png';
import image5 from '../../assets/image 5.png';
import image6 from '../../assets/image 6.png';
import image7 from '../../assets/image 6.png';
import image8 from '../../assets/image 6.png';
import image9 from '../../assets/image 6.png';

const Companies = () => {
  const companyLogos = [image1, image2, image3, image4, image5, image6,image7,image8,image9];

  return (
    <div className="company-wrap">
      <div className="heading">
        <p>Trusted by 100+ Companies across the globe!</p>
      </div>
      <div className="wrap-company-logo">
        {companyLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Company ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Companies;
