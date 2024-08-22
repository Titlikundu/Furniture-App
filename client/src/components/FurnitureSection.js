import React from 'react';
import './FurnitureSection.css';
import { Link } from 'react-router-dom';

function FurnitureSection() {
  return (
    <section className="onlineStore container-fluid">
      <div className="row furniture-list">
        
        <Link to="/Beds" className="col-4" aria-label="Wooden Sofa">
          <figure>
            <img
              className="lazy loaded"
              src="d8.jpg"
              alt="Bedroom Furniture"
              title="Bedroom Furniture"
              data-was-processed="true"
            />
          </figure>
          </Link>

        {/* Office Furniture */}
        <Link to="/StudyTables" className="col-4" aria-label="Wooden Sofa">
          <figure>
            <img
              className="lazy loaded"
              src="D9.png"
              data-src="images/home-new1/wfh-banner.jpg?v=51"
              alt="Buy Office Furniture Online in India"
              title="Office/Study Furniture "
              data-was-processed="true"
            />
          </figure>
          </Link>

        {/* Dining Table Sets */}
        <Link to="/Tables" className="col-4" aria-label="Wooden Sofa">
          <figure>
            <img
              className="lazy loaded"
              src="d11.jpg"
              data-src="images/home-new1/dining-set-banner.jpg?v=51"
              alt="Wooden Dining Furniture for Home Online"
              title="Dining Table Sets"
              data-was-processed="true"
            />
          </figure>
          </Link>

        {/* Coffee Tables */}
        <Link to="/Sofas" className="col-4" aria-label="Wooden Sofa">
          <figure>
            <img
              className="lazy loaded"
              src="d12.jpg"
              data-src="images/home-new1/space-save-banner.jpg?v=51"
              alt="Buy Wooden Space Saving Furniture for Home"
              title="Sofa sets"
              data-was-processed="true"
            />
          </figure>
          </Link>

        {/* Wooden Sofa */}
        <Link to="/Sofas" className="col-4" aria-label="Wooden Sofa">
      <figure>
        <img
          className="lazy loaded"
          src="d13.jpg"
          data-src="images/home-new1/wooden-sofa-banner.jpg?v=51"
          alt="Buy Wooden Sofa Furniture Online for Home"
          title="Wooden Sofas Online Furniture"
          data-was-processed="true"
        />
      </figure>
    </Link>

        {/* Dressing Tables */}
        <Link to="/Wardrobes" className="col-4" aria-label="Wooden Sofa">
          <figure>
            <img
              className="lazy loaded"
              src="d15.jpg"
              data-src="images/home-new1/dressing-table-banner.jpg?v=51"
              alt="Buy Dressing Table Furniture for Home"
              title="Wardrobes Furniture"
              data-was-processed="true"
            />
          </figure>
          </Link>
      </div>
    </section>
  );
}

export default FurnitureSection;
