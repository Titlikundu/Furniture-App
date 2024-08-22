import React from 'react';
import './ContactUs.css';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p><b/>If you have any questions or inquiries, feel free to reach out to us:</p>
          <ul>
            <li>Email: Kalyanifurniture2@gmail.com</li>
            <li>Phone: +91 9875617917</li>
            <li>Address: Baguiati,kolkata,West Bengal</li>
          </ul>
        </div>
      </div>
      <Footer /> {/* Include Footer */}
    </>
  );
};

export default ContactUs;
