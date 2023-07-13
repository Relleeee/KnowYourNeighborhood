import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import '../css/header.css';
import Hamburger from '../Images/hamburger.svg';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLinkClick = () => {
    setShowNavbar(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="KYN" className="header-logo" height={70} />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={Hamburger} alt="KYN" className="header-logo" height={70} />
        </div>
        <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Dashboard" onClick={handleLinkClick}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/search-result" onClick={handleLinkClick}>
                Search
              </Link>
            </li>
            <li>
              <Link to="/Login" onClick={handleLinkClick}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/Register" onClick={handleLinkClick}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
