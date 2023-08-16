import React from 'react';
import './page1.css';

const Page1 = () => {
  return (
    <div className="welcome-page">
      <div className="gif-container">
        <img
          src="https://cdn.wallpapersafari.com/59/89/FguWa9.gif"
          alt="Welcome GIF"
          className="background-gif"
        />
        <div className="welcome-message">
          <h1>OFFSET YOUR CARBON FOOTPRINT AND RESHAPE YOUR CLIMATE IMPACT</h1>
          <p>"The all-in-one platform to understand your role in the sustainable between transition and take transparent climate actioon with measurable impact"</p>
        </div>
      </div>
    </div>
  );
};

export default Page1;



// https://www.pmi.com/resources/images/default-source/sustainability/low-carbon-transition-plan/thumbnail_carbon_neutral.gif?sfvrsn=388500b6_2
