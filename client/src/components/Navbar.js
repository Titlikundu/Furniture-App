import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      
      <ul className="nav-links">
      
        <li>
          <Link to="/about">About Us & FAQ</Link>
        </li>
      
          <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      </ul>

   
      <div className="wrap-text-icon">
        <div className="user-credit-text cursor-pointer">
         </div>
         <Link to="/LoginRegister" data-test="profileIcon" className="cursor-pointer">
        <img width="32" height="32" alt="login.png" src="login.png" />
      </Link>
      </div>
     

      <div className="hd-cart-wrap hd-icon-cta">
      <Link to="/AddToCart" data-test="cartIcon" className="cursor-pointer">
        <img width="32" height="32" alt="cart icon" src="cart.png" />
      </Link>
    </div>

    </nav>
  );
};

export default Navbar;
