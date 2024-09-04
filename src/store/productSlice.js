import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    toggleLike: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.isLiked = !product.isLiked;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    createProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, toggleLike, deleteProduct, createProduct } = productSlice.actions;
export default productSlice.reducer;
