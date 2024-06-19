import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <p className="logo logo-footer">
            <span className="logo-white">Grocer</span>
            <span className="logo-brown">Ease</span>
            <span className="logo-white">.</span>
          </p>
          {/* <img src={assets.logo} alt="" /> */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec eros eget sem fringilla interdum et a turpis.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+123456789</li>
            <li>contact@grocerease.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © grocerease.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer