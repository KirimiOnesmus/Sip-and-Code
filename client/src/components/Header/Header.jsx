
// import React,{useState} from 'react';
// import PropTypes from 'prop-types'; 
// import './Header.css';
// import logo from '../../assets/logo.png';

// const Header = ({ handleJoinClick }) => {
//   const[isMenuOpen,setIsMenuOpen]=useState(false);

//   const toggleMenu= ()=>{
//     setIsMenuOpen(!isMenuOpen);
//   }

//   return (
//     <div className='header'>
//       <div className="logo">
//         <img src={logo} alt="App Logo" width="300px" height="300px" />
//       </div>
//       <div className={`right-side ${isMenuOpen? 'open':''}`}>
//         <ul className='links'>
//           <li><a href="/">Home</a></li>
//           <li><a href="/About">About Us</a></li>
//           <li><a href="/Events">Events</a></li>
//           <li><a href="/Partners">Partners</a></li>
//         </ul>
//         <div className="btn">
//           <button className='btn_btn' onClick={handleJoinClick}>Join Us</button>
//         </div>
//       </div>
//       <button className="menu-toggle" onClick={toggleMenu}></button>
//     </div>
//   );
// };

// Header.propTypes = {
//   handleJoinClick: PropTypes.func.isRequired
// };

// export default Header;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '../../assets/logo.png';
import { CiMenuFries } from "react-icons/ci";

const Header = ({ handleJoinClick }) => {

    const[isOpen,setIsOpen]=useState(false);

    const toogleMenu=()=>{
      setIsOpen(!isOpen)
    }

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="App Logo" width="300px" height="300px" />
      </div>
      <div className={`${!isOpen ? 'right-side active':'right-side'}`}>
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/About">About Us</a></li>
          <li><a href="/Events">Events</a></li>
          <li><a href="/Partners">Partners</a></li>
        </ul>
        
        <div className="btn">
          <button className="btn_btn" onClick={handleJoinClick}>Join Us</button>
        </div>
      </div>
      <div className="menu" onClick={toogleMenu}>
        <CiMenuFries />
      </div>
    </div>
  );
};

Header.propTypes = {
  handleJoinClick: PropTypes.func.isRequired,
};

export default Header;
