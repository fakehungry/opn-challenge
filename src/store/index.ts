import { configureStore } from '@reduxjs/toolkit';
import donationReducer from '../features/donations/donation-slice';
import nationalizeReducer from '../features/nationalize/nationalize-slice';

export const store = configureStore({
  reducer: {
    donations: donationReducer,
    weather: nationalizeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
