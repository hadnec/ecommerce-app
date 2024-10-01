// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import wishlistReducer from './slices/wishlistSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    wishlist: wishlistReducer,
    // Add other reducers here if needed
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
