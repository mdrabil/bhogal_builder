import React from 'react';
import './RecentProject.css';
import box1img from '../../assets/Rectangle 18.png'
import box2img from '../../assets/Rectangle 19.png'
import box3img from '../../assets/Rectangle 20.png'
import box4img from '../../assets/Rectangle 20.png'
import box1icon from '../../assets/fire.png'
import box2icon from '../../assets/home.png'
const RecentProject = () => {
  const items = [
    {
      img: `${box1img}`,
      icons: `${box1icon}`,
      iconsname: 'Popular',
      price: 5970,
      title: 'Western Sydney Projects',
      desc: '103 Wright Court, Burien, WA 98168'
    },
    {
        img: `${box2img}`,

        icons: `${box2icon}`,
      iconsname: 'New Listing',
      price: 1970,
      title: 'Northern Sydney Projects',
      desc: '1964 Jehovah Drive, VA 22408'
    },
    {
        img: `${box3img}`,

        icons: `${box2icon}`,
      iconsname: 'Discounted Price',
      price: 3450,
      title: 'Charming Cottage in the Meddow',
      desc: '1508 Centennial Farm RoadHarian 51537'
    },
    {
      img: `${box4img}`,

      icons: `${box1icon}`,
    iconsname: 'Popular',
    price: 2389,
    title: 'Grand Estate Projects',
    desc: '103 Wright Court, Burien, WA 98168'
  },
  {
    img: `${box4img}`,

    icons: `${box1icon}`,
  iconsname: 'Popular',
  price: 2389,
  title: 'Grand Estate Projects',
  desc: '103 Wright Court, Burien, WA 98168'
},
{
  img: `${box4img}`,

  icons: `${box1icon}`,
iconsname: 'Popular',
price: 2389,
title: 'Grand Estate Projects',
desc: '103 Wright Court, Burien, WA 98168'
},
    // Add more items as needed
  ];

  return (
    <div className="recent-project-box">
      {/* Heading Section */}
      <div className="heading">
        <span>Check Out Our New</span>
      </div>
      
      {/* Top Section */}
      <div className="recent-top-box">
        <div className="recent-left">
          <h1>Recent Projects</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nihil odio, tempora iusto quae itaque?</p>
        </div>
        <div className="recent-right">
          <div className="recent-btn">Construction</div>
          <div className="recent-btn">Renovation</div>
        </div>
      </div>

      {/* Scrollable Boxes Section */}
      <div className="recent-boxes-scroll">
        {items.map((item, index) => (
          <div className="recent-box" key={index}>
            <div
              className="image"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="recent-icons-name">
                <img src={item.icons} alt="Icon" />
                <span>{item.iconsname}</span>
            </div>
              </div>
              <div className="project-info">
                <h2>${item.price}</h2>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
