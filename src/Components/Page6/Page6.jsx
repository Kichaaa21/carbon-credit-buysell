import React from 'react';
import { Link } from 'react-router-dom';


const Page6 = () => {
  return (
    <div className="page2">

        <div className="gif-container">
            <img  src="https://img.pikbest.com/png-images/20191028/e-commerce-shopping-festival-shopping-gif-animation_2515297.png!bw700" alt="Floating GIF" className="floating-gif"/>
        </div>

      <div className="content">
        <div className="message">
          <h1>BUY CARBON CERDIT BY:</h1>
          <ol>
            <li>Visit our Market Prics</li>
            <li>Find a project that align with your values & goals</li>
            <li>Choose the kgs/tons</li>
            <li>Complete your transaction</li>
            <li>The project will receive the funds</li>
          </ol>
        </div>
        <div className="button-container">
          <Link to="/buy"><button className="learn-more">Buy</button></Link>
        </div>
      </div>
      
    </div>
  );
};

export default Page6;
