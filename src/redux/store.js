import { configureStore } from '@reduxjs/toolkit';
import crewSlice from './slices/crewSlice';
import locationSlice from './slices/locationSlice';

export const store = configureStore({
  reducer: {
    crew: crewSlice,
    location: locationSlice,
  },
});
