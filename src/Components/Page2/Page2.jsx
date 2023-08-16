import React from 'react';
import './page2.css';
import { Link } from 'react-router-dom';

const Page2 = () => {
  return (
    <div className="page2">
      <div className="content">
        <div className="message">
          <h1>REAL IMPACT NEEDS TRANSPARENCY</h1>
        </div>
        <div className="button-container">
          <Link to='/calculate'><button className="learn-more">Refer and get Coin🪙</button></Link>
        </div>
      </div>
      <div className="gif-container">
        <img  src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif" alt="Floating GIF" className="floating-gif"/>
      </div>
    </div>
  );
};

export default Page2;
