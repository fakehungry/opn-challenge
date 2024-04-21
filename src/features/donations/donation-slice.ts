import { createSlice } from '@reduxjs/toolkit';

interface DonationState {
  donate: number;
  message: string;
}

const initialState: DonationState = {
  donate: 0,
  message: '',
};

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    updateDonation(state, action) {
      state.donate += action.payload;
    },

    updateMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { updateDonation, updateMessage } = donationSlice.actions;
export default donationSlice.reducer;
