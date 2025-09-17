import { createSlice } from "@reduxjs/toolkit";

const festivalShowSilce = createSlice({
  name: 'festivalShowSilce',
  initialState: {
    festivalInfo: {},
  },
  reducers: {
    setFestivalInfo(state, action) {
      state.festivalInfo = action.payload;
    },
  }
});

export const {
  setFestivalInfo
} = festivalShowSilce.actions;

export default festivalShowSilce.reducer;