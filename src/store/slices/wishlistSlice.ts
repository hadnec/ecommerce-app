// src/store/slices/wishlistSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './productsSlice';

interface WishlistState {
  items: Product[];
}

const loadFromLocalStorage = (): Product[] => {
  try {
    const serializedState = localStorage.getItem('wishlist');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState) as Product[];
  } catch (e) {
    console.warn('Error loading wishlist from localStorage', e);
    return [];
  }
};

const saveToLocalStorage = (state: WishlistState) => {
  try {
    const serializedState = JSON.stringify(state.items);
    localStorage.setItem('wishlist', serializedState);
  } catch (e) {
    console.warn('Error saving wishlist to localStorage', e);
  }
};

const initialState: WishlistState = {
  items: loadFromLocalStorage(),
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        saveToLocalStorage(state);
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveToLocalStorage(state);
    },
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
