import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="title">
        <h1>Welcome to Our Product Shop</h1>
        <Link to="/products" className="title-btn">
          Go to Products
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
