import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="nav-logo">ℂ𝕒𝕣𝕓𝕠𝕟 𝕋𝕣𝕒𝕕𝕖𝕚𝕟𝕘</Link>
        <ul className="nav-links">
        <li ><Link to="/" className="nav-item">Home</Link></li>
          <li ><Link to="/buy" className="nav-item">Buy</Link></li>
          <li ><Link to="/sell" className="nav-item">Sell</Link></li>
          <li ><Link to="/calculate" className="nav-item">Calculate/Refer</Link></li>
          <li ><Link to="/contact" className="nav-item">Contact</Link></li>
        </ul>
        <div className="nav-search">
          <input type="text" placeholder="Search" />
          <Link to="/login"><button className='butt'>Login</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
