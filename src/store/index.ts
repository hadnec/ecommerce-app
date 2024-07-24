import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { fakeStoreApi } from '../services/fakeStoreApi';

export const store = configureStore({
  reducer: {
    // Добавляем редюсеры
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
  },
  // Добавляем middleware для кэширования и других возможностей RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
});

// Настройка слушателей для refetching при изменении фокуса и других событий
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
