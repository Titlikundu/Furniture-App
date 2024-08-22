import React, { useState, useEffect } from 'react';
import './Productlist.css';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Wooden Bed with Full Drawer Storage', price : '₹ 29,999', image: 'bed1.jpg'},
    { id: 2, name: 'Solid Wooden Dressing Table', price: '₹ 22,990', image: 'd1.jpg'},
    { id: 3, name: 'Wood Temple For Home', price: '₹ 9,800', image: 'd6.jpg'},
    { id: 4, name: '3 Door Wooden Wardrobe with Mirror ', price: '₹ 21,220', image: 'd3.jpg' },
    { id: 5, name: 'Wooden Side Board - Diamond Shaped Design with Four Drawers & 2 Doors', price: '₹ 25,800', image: 'd2.jpg'},
    { id: 6, name: 'Wood Sofa Set', price: '₹ 26,500', image: 'd4.jpg'},
    { id: 7, name: 'Wood TV Entertainment Unit ', price: '₹ 13,000', image: 'd7.jpg'},
   
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, products.length]);


  const goToPrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + products.length) % products.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % products.length);
  };

  return (
    <div className="product-slider">
      <div className="product-list">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`product-item ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="product-item__price-list price-list">
              <span className="price price--highlight">
                <span className="visually-hidden">Price  </span>{product.price}
              </span>
            </div>
           
          </div>
        ))}
      </div>
      <button className="prev" onClick={goToPrevSlide}>
        Previous
      </button>
      <button className="next" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default ProductList;
