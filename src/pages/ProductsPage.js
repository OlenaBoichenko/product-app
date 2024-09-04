import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { setProducts } from '../store/productSlice';
import axios from 'axios';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
      
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="products-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
