import React from 'react'
import "./About.css"
import about from "../../assets/about.png"

const About = () => {
  return (
    <div className='about'>
      {/* <div className="intro">
        <h1>Join, Chat and Intract with fellow young developers</h1>
      </div> */}
        <div className="desc-img">
            <div className="description">
              <h2 className='desc-header'>Who is Sip and Code ?</h2>
             <p>Welcome to Sip and Code! We're a dynamic group of young developers—self-taught tech enthusiasts and dedicated students—united by our love for coding. Here, we come together to exchange ideas, solve problems, and explore the latest in tech. Our gatherings are more than just coding sessions; we also enjoy game nights and special events that blend learning with fun. Whether you're a seasoned pro or just starting out, Sip and Code is the perfect place to grow, collaborate, and connect with fellow developers. Grab your favorite drink, join our discussions, and let’s code and play together!</p> 
            </div>
            <div className="image">
                <img src={about} alt="Logo" />
            </div>
        </div>


    </div>
  )
}

export default About