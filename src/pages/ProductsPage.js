import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../store/productSlice';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [showFavorites, setShowFavorites] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  // Загружаем данные из API при монтировании компонента
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Фильтрация товаров по избранным
  const filteredProducts = showFavorites
    ? products.filter((product) => product.isLiked)
    : products;

  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="filter">
      <Link to="/">Back to Home</Link>
        <button onClick={() => setShowFavorites(!showFavorites)}>
          {showFavorites ? 'Show All' : 'Show Favorites'}
        </button>
        <Link to={showFavorites ? '/products' : '/favorites'}>
          {showFavorites ? 'Back to All Products' : 'Go to Favorites'}
        </Link>
      </div>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
