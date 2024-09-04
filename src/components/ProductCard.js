import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLike, deleteProduct } from '../store/productSlice';
import { useNavigate } from 'react-router-dom';
import Like from "./LikeButton"


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLike = (e) => {
    e.stopPropagation(); // Останавливаем всплытие события
    dispatch(toggleLike(product.id));
  };

  const handleDelete = (e) => {
    e.stopPropagation(); // Останавливаем всплытие события
    dispatch(deleteProduct(product.id));
  };

  const handleDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="product-card">
      <h3>{product.title.slice(0, 10)}</h3>
      <img src={product.image} alt='product'></img>
      <p>{product.description.slice(0, 20)}...</p>
      <div className="actions">
      <Like onClick={handleLike} />

        <button onClick={handleLike}>
          {product.isLiked ? 'Dislike' : 'Like'}
        </button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleDetails}>View Details</button> 
      </div>
      
    </div>
  );
};

export default ProductCard;
