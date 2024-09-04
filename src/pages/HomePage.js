import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Product App</h1>
      <p>Navigate to the products page to explore our collection.</p>
      <Link to="/products">Go to Products</Link>
    </div>
  );
};

export default HomePage;
