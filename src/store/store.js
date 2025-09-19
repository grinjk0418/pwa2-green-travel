import { configureStore } from "@reduxjs/toolkit";
import festivalReducer from './slices/festivalSlice.js';
import festivalShowReducer from './slices/festivalShowSilce.js'
import stayReducer from './slices/staySlice.js'
import stayDetailReducer from './slices/stayDetailSlice.js'

export default configureStore({
  reducer: {
    festival: festivalReducer,
    festivalShow: festivalShowReducer,
    stay: stayReducer,
    stayDetail: stayDetailReducer,
  }
});