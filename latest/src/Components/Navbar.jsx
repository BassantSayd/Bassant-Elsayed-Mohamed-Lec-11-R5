import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">sneakers</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/collections">Collections</Link></li>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="cart-profile">
        <img src="/images/cart-icon-28356.png" alt="Cart" className="cart-icon" />
        <img src="/images/image-avatar.png" alt="Profile" className="profile-pic" />
      </div>
    </nav>
  );
}

export default Navbar;