import React from 'react'
import image1 from '../../assets/Rectangle 25.png'
import image2 from '../../assets/Rectangle 26.png'
import image3 from '../../assets/Rectangle 27.png'
import image4 from '../../assets/Rectangle 28.png'
import './NaighbarWood.css'
const NaighbarWood = () => {
    const naighbarwooddetails = [
        {
            img: `${image1}`,
            yard: 216,
            city: 'New York City, NY'
        },
        {
            img: `${image2}`,
            yard: 141,
            city: 'New York City, NY'
        },
        {
            img: `${image3}`,
            yard: 216,
            city: 'New York City, NY'
        },
        {
            img: `${image4}`,
            yard: 216,
            city: 'New York City, NY'
        },
    ]
  return (
    <div>
        <div className="naighbarwood-main-box">
            <div className="heading">
                <span>Areas across the town</span>
                <h1>Neighborhood Properties</h1>

                <div className="naighborwood-boxes">
                    {/* {naighbarwooddetails.map((items, index) => (
                        <div
                            key={index}
                            className="naighborwood-box"
                            style={{ backgroundImage: `url(${items.img})` }}
                        >
                            <h1>{items.yard}</h1>
                            <p>{items.city}</p>
                        </div>
                    ))} */}
                    <h1>in Progressing ........</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NaighbarWood
