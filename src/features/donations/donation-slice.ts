import { createSlice } from '@reduxjs/toolkit';

interface DonationState {
  donate: number;
}

const initialState: DonationState = {
  donate: 0,
};

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    updateDonation(state, action) {
      state.donate += action.payload;
    },
  },
});

export const { updateDonation } = donationSlice.actions;
export default donationSlice.reducer;
