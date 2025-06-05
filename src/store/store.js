import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slice/caharacterSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer
  }
});