
import React from 'react';
import { Link } from 'react-router-dom';

import './Sofas.css'; 
const Product = ({ itemName, price, description, quantity, imageSrc }) => {
    return (
      <div className="product">
        <div className="image-box">
          <div className="images" id={`image-${itemName.toLowerCase()}`} style={{ backgroundImage: `url(${imageSrc})` }}></div>
        </div>
        <div className="text-box">
          <h2 className="item">{itemName}</h2>
          <h3 className="price">{price}</h3>
          <p className="description">{description}</p>
          <label htmlFor={`item-${itemName.toLowerCase()}-quantity`}>Quantity:</label>
          <input type="text" name={`item-${itemName.toLowerCase()}-quantity`} id={`item-${itemName.toLowerCase()}-quantity`} value={quantity} />
          <Link to="/AddToCart">
  <button type="button" name={`item-${itemName.toLowerCase()}-button`} id={`item-${itemName.toLowerCase()}-button`}>
    Add to Cart
  </button>
</Link>
        </div>
      </div>
    );
  };
  



const SofasPage = () => {
 
  
  return (
    <div>
        <br/> <br/> <br/>
      <div className="listing-section">
      <Product 
  itemName="Wooden 3 Seater Sofa Set" 
  price=" Rs. 15,299.00" 
  description="Upholestry: Polycotton" 
  quantity="1"
  imageSrc="s1.jpg"
/>
<Product 
  itemName="Designer Wooden Sofa" 
  price=" Rs. 22,999.00" 
  description="Made from Sal Wood" 
  quantity="1" 
  imageSrc="s2.jpg"
/>
<Product 
  itemName=" Wooden Sofa(Peanut Brown Velvet)" 
  price="Rs. 30,999.00" 
  description="Made from Sal Wood." 
  quantity="1"
  imageSrc="s4.jpg"
/>

      </div>
      
     
    </div>
  );
};

export default SofasPage;
