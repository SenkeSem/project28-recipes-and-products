import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../redux/slices/productsSlice.js';

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsSlice,
    },
  });
};

// export const store = configureStore({
//   reducer: {
//     products: productsSlice,
//   },
// });
