import React from 'react';
import { Link } from 'react-router-dom';
import './FurnitureCategories.css';

const FurnitureCategories = () => {
  const categories = [
    { id: 1, name: 'Sofas', icon: 'sofa.png', link: '/Sofas'},
    { id: 2, name: 'Tables', icon: 'dinningtable.png', link: '/Tables' },
    { id: 3, name: 'Beds', icon: 'bed.png', link: '/Beds' },
    { id: 4, name: 'Wardrobes', icon: 'wardrobe.png', link: '/Wardrobes' },
    { id: 5, name: 'StudyTables', icon: 'studytable.png', link: '/Studytables' },
   
  ];

  const regularCategories = categories.filter(category => category.id < 7);
 

  return (
    <div>
      <h2>Explore Our Furnitures</h2>
      <br/>
  
      <div className="category-items">
        {regularCategories.map((category) => (
          <div key={category.id} className="category-item">
            <Link to={category.link} key={category.id} className="category">
              <img
                src={category.icon}
                alt={`${category.name} icon`}
              />
              <div>{category.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureCategories;