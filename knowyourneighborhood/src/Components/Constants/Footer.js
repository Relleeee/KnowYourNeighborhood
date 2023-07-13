import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png'
import '../css/all.css';

function Footer (){
  return (
    <footer className="footer-container">
      <div className="footer-logo">
      <Link to="/">
        <img src={logo} alt="Know Your Neighborhood" />
        </Link>
      </div>
      <div className="footer-text">
        <p>&copy; 2023 Know Your Neighborhood. All rights reserved.</p>
      </div>
      <div className="footer-links">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
