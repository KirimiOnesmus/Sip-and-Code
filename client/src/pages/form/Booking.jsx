import React from 'react';
import "./booking.css"; 
import mpesa from "../../assets/mpesa.png"
import airtel from "../../assets/airtel.png"

const booking = () => {
  return (
    <div className='booking'>
        <div className="booking-container">
            
               <div className="form">
                <form action="">
                    <div className="input">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" className='name' placeholder='John Doe' required/>
                    </div>
                   <div className="input">
                        <label htmlFor="email">Email</label>
                        {/* <input type="text" className='email' placeholder='johndoe@gmail.com' required/> */}
                        <input type="email" name="mail"className='email' placeholder='johndoe@gmail.com' required />
                   </div>
                    <div className="input">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="number" placeholder='Mpesa or Airtel Money Number start with 254'  required/>
                    </div>
                    <div className="input">
                        <label htmlFor="location">County/City/State</label>
                        <input type="text" name='location' className='location' placeholder='Nairobi' required/>
                    </div>
                    <div className="input">
                        <label htmlFor="organization">Company/Organization(Optional)</label>
                        <input type="text" name='organization' className='organization' placeholder='IPNET Kenya' />
                    </div>
                    <h3>Payment Method</h3>
                    <div className="payment">
                        <div className='mpesa'>
                            <input
                            type="radio"
                            id="mpesa"
                            name="payment"
                            value="M-Pesa"
                            //   checked={selectedEvent === "Event 1"}
                            //   onChange={handleEventChange}
                            />
                            <label htmlFor="mpesa">
                                <img src={mpesa} alt="Mpesa" width='60px' height='60px' />
                            </label>
                        </div>
                        <div className='airtel'>
                            <input
                            type="radio"
                            id="airtel"
                            name="payment"
                            value="Airtel Money"
                            //   checked={selectedEvent === "Event 2"}
                            //   onChange={handleEventChange}
                            />
                            <label htmlFor="airtel">
                                <img src={airtel} alt="Airtel Money" width='70px' height='70px'  />
                            </label>

                        </div>
                    </div>
                    
                    <div className="button">
                        <input type="button" value="Process Registration" />
                    </div>
                </form>
               </div>

        </div>
        
    </div>
  )
}

export default booking