import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../redux/slices/productsSlice.js';

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
