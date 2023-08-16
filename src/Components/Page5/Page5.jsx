import React from 'react';
import { Link } from 'react-router-dom';
import './page5.css';

const Page5 = () => {
  return (
    <div className="page2">

<div className="gif-container">
        <img  src="https://thumbs.gfycat.com/ExaltedDownrightHuia-max-1mb.gif" alt="Floating GIF" className="floating-gif"/>
      </div>

      <div className="content">
        <div className="message">
          <h1>CALCULATE YOUR CARBON FOOTPRINT</h1>
        </div>

        <div className='calbox'>
        <div className="button-container">
          <h2> TRY OUR CALCULATOR</h2>
          <Link to='/calculate'><button className="calculate">YOUR FOOTPRINT</button></Link>
          <Link to='/calculate'><button className="calculate">COMPANY FOOTPRINT</button></Link>
          <Link to='/calculate'><button className="calculate">TRIP FOOTPRINT</button></Link>
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default Page5;
