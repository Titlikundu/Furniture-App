import React from 'react';
import { useState } from 'react';
import './About.css'; 
import Footer from '../components/Footer';

const FAQSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <div className="faq-container">
      <div className="section-title">
        <center><h1>Frequently Asked Questions</h1></center>
        <br />
        <div className="layout">
          <div className={`accordion ${activeAccordion === 1 ? 'active' : ''}`} onClick={() => handleAccordionClick(1)}>
            <div className="accordion__question">
              <p>Is there a first time customer discount?</p>
            </div>
            <div className="accordion__answer">
              <p>We’d love for you to try us out, see what we have to offer, order from us, experience the joy of seeing a beautifully crafted product at your home before we give you a discount to buy something from us. So, we don’t have a first-time customer discount.</p>
            </div>
          </div>

          <div className={`accordion ${activeAccordion === 2 ? 'active' : ''}`} onClick={() => handleAccordionClick(2)}>
            <div className="accordion__question">
              <p>Is there any delivery charges or installation charges?</p>
            </div>
            <div className="accordion__answer">
              <p>Yes! A small delivery fee will be applied based on your product value. Installation and clean-up after the delivery process are on us.</p>
            </div>
          </div>

          <div className={`accordion ${activeAccordion === 3 ? 'active' : ''}`} onClick={() => handleAccordionClick(3)}>
            <div className="accordion__question">
              <p>What is the estimated delivery time?</p>
            </div>
            <div className="accordion__answer">
              <p>The delivery time differs from product to product, which is based on the in-stock availability or made-to-order and your delivery location.</p>
            </div>
          </div>

          <div className={`accordion ${activeAccordion === 4 ? 'active' : ''}`} onClick={() => handleAccordionClick(4)}>
            <div className="accordion__question">
              <p>I want to customize one of your products, can I do that?</p>
            </div>
            <div className="accordion__answer">
              <p>Yes, absolutely! Please call us on +91 9875617917.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const About = () => {
  return (
    <>
      <main id="main">
      <section className="about">
        <h1>About Us</h1>
        <div className="about-info">
            <div className="about-img">
            <img src="p1.jpeg" alt="store" />
            </div>
            <div>
              <p>Kalyani Furniture is known for its top-notch furniture. we made all kinds of furniture, from modern to classic styles, and it's all made really well.
                 Whether you're looking for something sleek or timeless, they've got you covered for your living room, dining room, bedroom, 
                 or office. Their stuff lasts long and looks great, fitting into any space nicely. They focus on making furniture that's
                  both stylish and practical, earning them a great reputation for quality and design. In short, Kalyani Furniture crafts 
                  furniture that's durable, stylish, and perfect for any home or office.</p>
           
            </div>
        </div>
    </section>

        <FAQSection />
      </main>
      <br/>
      <Footer />
    </>
  );
};

export default About;
