import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
// import logo from "../../assets/logo.png"

const Footer = () => {
  const today=new Date();
  const year = today.getFullYear();
  return (
    <div className='footer'>
      {/* <div className="logo">
        <img src={logo} alt="App Logo" width="300px" height="300px"/>
      </div> */}
      <div className="socials">
        <div className="facebook">
          <FaFacebook />
        </div>
        <div className="twitter">
          <FaXTwitter />
        </div>
        <div className="instagram">
            <IoLogoInstagram />
        </div>
        <div className="whatsapp">
          <BsWhatsapp />
        </div>
        <div className="linkedin">
           <FaLinkedin />
        </div>
      </div>
      <div className="copyright">
        <p>&copy;<span className='year'>{year}</span> All right reserved</p>
      </div>
    </div>
  )
}

export default Footer