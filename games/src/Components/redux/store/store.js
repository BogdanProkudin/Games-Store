import { configureStore } from '@reduxjs/toolkit';
import games from '../slices/games';
import cart from '../slices/cart';
export const store = configureStore({
  reducer: { games, cart }
});
