import { createSlice } from '@reduxjs/toolkit';

export const initialProduct = [];

export const productsSlice = createSlice({
  name: 'product',
  initialProduct,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
