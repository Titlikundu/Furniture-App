
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
  // You can manage state, handle events, and other functionalities here
  
  return (
    <div>
        <br/> <br/> <br/>
      <div className="listing-section">
      <Product 
  itemName="Dining Table Set 4 Seater" 
  price=" Rs. 45,299.00" 
  description="Made from Sal Wood" 
  quantity="1"
  imageSrc="t1.jpg"
/>
<Product 
  itemName="6 Seater Dining Set with Bench" 
  price=" Rs. 57,999.00" 
  description="Made from Sal Wood" 
  quantity="1" 
  imageSrc="t2.jpg"
/>
<Product 
  itemName=" Solid Wood 8 Seater Dining Set" 
  price="Rs. 33,999.00" 
  description="Made from Sal Wood." 
  quantity="1"
  imageSrc="t4.jpg"
/>

      </div>
      
     
    </div>
  );
};

export default SofasPage;
