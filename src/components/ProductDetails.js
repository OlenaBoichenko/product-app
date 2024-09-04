import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector(state => state.products.products.find(p => p.id === parseInt(id)));

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default ProductDetails;
