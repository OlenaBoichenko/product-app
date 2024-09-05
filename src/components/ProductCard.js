import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLike, deleteProduct } from '../store/productSlice';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [liked, setLiked] = useState(() => {
        
    const saved = JSON.parse(localStorage.getItem('likes')) || {};
    
    return saved[product.id] || false;
});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('likes')) || {};
    saved[product.id] = liked;
    localStorage.setItem('likes', JSON.stringify(saved));
}, [liked, product.id]);

  const handleLike = (e) => {
    e.stopPropagation(); 
    setLiked(!liked);
    dispatch(toggleLike(product.id));
  };

  const handleDelete = (e) => {
    e.stopPropagation(); 
    dispatch(deleteProduct(product.id));
  };

  const handleDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="product-card">
      <h3>{product.title.slice(0, 10)}</h3>
      <img src={product.image} alt='product'></img>
      <p>$ {product.price}</p>
      <p>{product.description.slice(0, 20)}...</p>
      <div className="actions">
      <FaHeart 
            onClick={handleLike} 
            style={{ color: liked ? 'red' : 'black', cursor: 'pointer', fontSize: '24px' }} 
        />
        <button onClick={handleDetails}>View Details</button> 
      <RiDeleteBin6Line 
        onClick={handleDelete}
        style={{cursor: 'pointer', fontSize: '24px'}}
      />
         
      </div>
      
    </div>
  );
};

export default ProductCard;
