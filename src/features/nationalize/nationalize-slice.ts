import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface NationalizeState {
  nationalizeData: any;
  loading: boolean;
  error: string | null;
}

const initialState: NationalizeState = {
  nationalizeData: null,
  loading: false,
  error: null,
};

export const fetchNationalize = createAsyncThunk(
  'nationalize/fetchNationalize',
  async () => {
    const response = await fetch(`https://api.nationalize.io/?name=nathaniel`);
    const data = await response.json();
    return data;
  },
);

const nationalizeSlice = createSlice({
  name: 'nationalize',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNationalize.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNationalize.fulfilled, (state, action) => {
        state.loading = false;
        state.nationalizeData = action.payload;
      })
      .addCase(fetchNationalize.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default nationalizeSlice.reducer;
