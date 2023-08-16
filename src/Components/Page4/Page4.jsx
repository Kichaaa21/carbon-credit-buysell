import React from 'react';
import './page4.css';
import { Link } from 'react-router-dom';

const Page4 = () => {
  return (
    <div className="page4">
      <div className="content">
        <div className="message">
          <h1>HELP AND SUPPORT WHO WANT TO MAKE A GREAT DIFFERENCE</h1>
        </div>
      </div>
      
      
      <div class="cards">
        <div class="hoverarea">
          <img src="https://github.com/Xokhezi/Instagram-camping-card/blob/main/tree.png?raw=true" class="img-tree--left" alt="" />
          <img src="https://github.com/Xokhezi/Instagram-camping-card/blob/main/tree.png?raw=true" class="img-tree--right" alt="" />
          <div class="card card-camping">
            <h1>Carbon Offsetting</h1>
            <img src="https://www.nsenergybusiness.com/wp-content/uploads/sites/3/2020/11/Tehri-hydropower-dam-India-valdiya_ravi-Shutterstock-1754495642-740x520.jpg" class="img-tent" alt="" />
            <h3 className='content'>Hydro power project at Masli and Tangnu</h3>
            <Link to="/buy"><button className='buying'>BUY @ 13ETH</button></Link>
          </div> 
        </div>
      </div>


    </div>
  );
};

export default Page4;
