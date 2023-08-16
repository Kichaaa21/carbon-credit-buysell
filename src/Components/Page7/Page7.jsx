import React from 'react';
import { Link } from 'react-router-dom';


const Page7 = () => {
  return (
    <div className="page2">
      <div className="content">
        <div className="message">
          <h1>SELL CARBON CERDIT BY:</h1>
          <ol>
            <li>Upload project and receive request from buyers</li>
            <li>Sell your carbon cerdit on the market</li>
            <li>Upload certificate of cancellation or transfer of credits</li>
            <li>Withdraw payment</li>
          </ol>
        </div>
        <div className="button-container">
        <Link to="/sell" className="nav-item"><button className="learn-more">Sell</button></Link>
          
        </div>
      </div>
      <div className="gif-container">
        <img  src="https://media.tenor.com/6aAEikTlKtQAAAAC/were-selling-jesse-ridgway.gif" alt="Floating GIF" className="floating-gif"/>
      </div>
    </div>
  );
};

export default Page7;
