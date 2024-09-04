import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetails from './components/ProductDetails';
import CreateProductPage from './pages/CreateProductPage';
import HomePage from './pages/HomePage';  // Импортируем новый компонент

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Новый маршрут */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/create-product" element={<CreateProductPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

