import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  return data.map((product) => ({
    ...product,
    isLiked: favorites.includes(product.id), // Проверяем, находится ли товар в избранном
  }));
});

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    toggleLike: (state, action) => {
      const product = state.find((p) => p.id === action.payload);
      if (product) {
        product.isLiked = !product.isLiked;
        
        const favorites = state.filter((p) => p.isLiked).map((p) => p.id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    createProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  
});

export const { toggleLike, deleteProduct, addProduct, createProduct } = productSlice.actions;

export default productSlice.reducer;

