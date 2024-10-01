// Partners.jsx
import React from 'react';
import './Partners.css';
import ankara from "../../assets/Partners/Ankara.jpeg"; // Ensure the path is correct and file exists
import amazon from "../../assets/Partners/amazon.png";   // Ensure the path is correct and file exists
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = () => {

  return (
    <div className='partners'>
      <div className="partner-container">

          <div className="partner-img">
            <img src={ankara} alt="Ankara" />
          </div>
          <div className="partner-img">
            <img src={amazon} alt="Amazon" />
          </div>
      
      </div>
    </div>
  );
}

export default Partners;
