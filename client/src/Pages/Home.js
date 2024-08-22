import React from 'react';

import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import ProductList from '../components/Productlist';
import FurnitureCategories from '../components/FurnitureCategories';
import FurnitureSection from '../components/FurnitureSection';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      
<br/> <br/> 
      <Slideshow/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


      <section className="categories-section">
       <FurnitureCategories />
      </section>
    
      <section className="products-section">
        <center><h2>Popular Products</h2></center>
        <ProductList />
      </section>
      <br/><br/><br/>
      <br/>
      <section className="products-section">
        <center><h2>Shop By Rooms</h2></center>
        <FurnitureSection/>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;

