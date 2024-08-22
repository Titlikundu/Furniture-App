import React, { useState } from 'react';

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeCartItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
      
      <div>
        <br/><br/><br/><br/>
        <h2>Cart Items:</h2>
       
    </div>
  );
};

export default AddToCart;
