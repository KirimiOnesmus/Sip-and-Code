import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from './components/About/About';
import Events from './components/Events/Events';
import Partners from './components/Partners/Partners';
import Join from './pages/form/Join';
import Booking from './pages/form/Booking'; 
import './App.css'; 

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleJoinClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);

  };


  return (
    <>
      <div className={`app-container ${showForm  ? 'overlay-active' : 'hidden'}`}>
        <Header handleJoinClick={handleJoinClick} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Events' element={<Events/>} />
          <Route path='/Partners' elements={<Partners/>} />
          <Route path='/Join' elements={<Join />} />
          <Route path='/Booking' element={<Booking/>}/>
        </Routes>
        {showForm && <Join handleClose={handleClose} />}
  
      </div>
    </>
  );
};

export default App;
