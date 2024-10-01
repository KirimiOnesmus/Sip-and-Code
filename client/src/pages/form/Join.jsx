import React from 'react';
import './Join.css';


const Join = ({handleClose}) => {
  return (
    <div className="form join-form">
      <div className="join-container">
      <button className="close-button" onClick={handleClose}>X</button>
      <form className="join-form">
        <input type="text" name="name" placeholder="Full Name" />
        <input type="text" name="number" placeholder="Phone Number" />
        <input type="text" name="email" placeholder="Email Address" />
        <input type="text" name="school" placeholder="School Attended/Attending" />
        
        <select name="level" className="dropdown">
          <option value="" disabled selected>Select Professional Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <select name="interest" className="dropdown">
          <option value="" disabled selected>Select Area of Interest</option>
          <option value="website-development">Website Development</option>
          <option value="graphics-design">Graphics Design</option>
          <option value="mobile-development">Mobile Development</option>
          <option value="cyber-security">Cyber Security</option>
          <option value="data-analytics">Data Analytics</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    
  );
};



export default Join;
