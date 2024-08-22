import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p> <b/>&copy; 2023 Kalyani Furniture</p>
        <div className="row accept-cards-social-icons">
          <div className="accept-cards">
            <p className="text-lg font-extrabold accept-header">We now only accept payment at the time of delivery</p><br/>
            <p className="text-lg font-extrabold accept-header">Pay us via</p>
            <br/><div className="accept-card-icons">
              <img
                height="35"
                width="56"
                src="visa.png"
                alt="visa-card"
                className="card-icons"
              />
              <img
                height="35"
                width="56"
                src="rupay.png"
                alt="rupay-card"
                className="card-icons"
              />
               <img
                height="35"
                width="56"
                src="cod.png"
                alt="cod"
                className="card-icons"
              />
               <img
                height="35"
                width="56"
                src="upi.png"
                alt="upi"
                className="card-icons"
              />
            </div>
          </div>
        </div>
       
        <div className="social-icon-section">
          <p className="text-lg font-extrabold social-icon-heading">
           Follow us Here
          </p>
          <div className="social-icon-wrapper">
            <button className="footer-button">
              <img
                src="instagram.png"
                alt="Instagram-icon"
                className="social-icons cursor-pointer"
              />
            </button>
            <button className="footer-button">
              <img
                src="facebook.png"
                alt="Facebook-icon"
                className="social-icons cursor-pointer"
              />
            </button>
            <button className="footer-button">
              <img
                src="twitter.png"
                alt="twitter-icon"
                className="social-icons cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
