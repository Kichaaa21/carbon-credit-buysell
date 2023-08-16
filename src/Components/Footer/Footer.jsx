import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <div className='footer'>
       <div className="footer-container">
  <footer className="footer">
    <div className="footer-row">
      <div className="footer-column">
        {/* <h5 className="footer-heading">Section</h5> */}
        <ul className="footer-nav">
          {/* <li className="footer-item">Buy</li> */}
          {/* <li className="footer-item">Cell</li> */}
          {/* <li className="footer-item">Calculate</li> */}
          {/* <li className="footer-item">Contact</li> */}
        </ul>
      </div>

      

      <div className="footer-column">
        <form className="subscribe-form">
          <h5 className="footer-heading">Subscribe to our newsletter</h5>
          <p className="subscribe-text">Monthly digest of what's new and exciting from us.</p>
          <div className="subscribe-input-group">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="subscribe-input" placeholder="Email address"/>
            <button className="subscribe-button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="footer-copy">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul className="footer-social">
        <li><a href="https://www.freepnglogos.com/pics/logo-twitter-png" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" width="24" alt="twitter logo vector png clipart" /></a></li>
        <li><a href="https://www.freepnglogos.com/pics/google-logo" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" width="24" alt="google logo png suite everything you need know about google newest" /></a></li>
        <li><a href="https://www.freepnglogos.com/pics/logo-instagram-png" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/download-instagram-png-logo-20.png" width="24" alt="Download instagram png logo" /></a></li>
      </ul>
    </div>
  </footer>
</div>

    </div>
  )
}
