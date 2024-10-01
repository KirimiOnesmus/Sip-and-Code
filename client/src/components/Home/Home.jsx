import React from 'react'
import './Home.css'
import About from '../About/About'
import Events from '../Events/Events'
import Partners from '../Partners/Partners'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    <div className='main-content'>
        <div className="about">
            <About/>
        </div>
        <div className="events">
            <h1 className='section-title'> Events</h1>
            <Events />
        </div>
        <div className="partners">
            <h1 className='section-title'> Partners</h1>
            <Partners/>
        </div>

        <div className="footer">
             <Footer/>
        </div>


    </div>
    
    
    </>
    
  )
}

export default Home