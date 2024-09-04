import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { selectFavoriteProducts } from '../store/selector';

const FavoritesPage = () => {
  const favoriteProducts = useSelector(selectFavoriteProducts);

  return (
    <div className="favorites-page">
      <h1>Favorites</h1>
      <Link to="/products">Back to All Products</Link>
      <div className="product-list">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No favorite products</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
