import React from 'react';
import "./Events.css";
// import { useNavigate } from 'react-router-dom';
import sipandcode from "../../assets/Events/Sip and Code.jpg";
import ankara from "../../assets/Events/Ankara.png";

const eventsData = [
  { imgSrc: sipandcode, title: "Test Your IQ" },
  { imgSrc: ankara, title: "Game Night" },
  { imgSrc: ankara, title: "Game Night" },
  { imgSrc: ankara, title: "Game Night" }
];

const Events = () => {
  const visibleEvents = eventsData.slice(0, 3); // Only take the first 3 events
 
  // const navigate =useNavigate();
  const bookingPage=()=>{
    // navigate('/booking','_blank');
    // // window.open('_blank');
    window.open('/booking','_blank')
  }

  return (
    <div className='events'>
      
      <div className="btn">
        <button className='previous_btn'>Previous</button>
        <button className='Upcoming_btn'>Upcoming</button>
      </div>
      <div className="container">
        {visibleEvents.map((event, index) => (
          <div className="card-container" key={index}>
            <div className="card-image">
              <img src={event.imgSrc} alt={`Event ${index + 1}`} />
            </div>
            <div className="card-detail">
              <div className="card-title">{event.title}</div>
              <div className="card-button" onClick={()=>bookingPage()} >
                Book a slot
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
