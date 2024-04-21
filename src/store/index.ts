import { configureStore } from '@reduxjs/toolkit';
import donationReducer from '../features/donations/donation-slice';

export const store = configureStore({
  reducer: {
    donations: donationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
