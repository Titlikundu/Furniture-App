import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slideshow.css'; 

const Slideshow = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
      >
        <div>
          <img src="Furniture1.jpg" alt="Furniture 1" />
        </div>
        <div>
          <img src="Furniture3.jpg" alt="Furniture 2" />
        </div>
        <div>
          <img src="Furniture4.jpg" alt="Furniture 3" />
        </div>
        <div>
          <img src="Furniture6.jpg" alt="Furniture 4" />
        </div>
        <div>
          <img src="Furniture7.jpeg" alt="Furniture 5" />
        </div>
        <div>
          <img src="Furniture8.jpg" alt="Furniture 6" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slideshow;
