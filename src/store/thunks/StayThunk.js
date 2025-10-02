import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../configs/axiosConfig.js";
import axios from "axios";

const stayIndex = createAsyncThunk(
  'staySlice/stayIndex',
  async (arg, thunkAPI) => { // 파라메터 첫번째는 외부주입, 두번째는 해당 리덕스 관련
    // state 접근 방법
    const state = thunkAPI.getState();

    const url = `${axiosConfig.BASE_URL}/searchStay2`;
    const config = {
      params: {
        serviceKey: axiosConfig.SERVICE_KEY,
        MobileOS : axiosConfig.MOBILE_OS,
        MobileApp: axiosConfig.MOBILE_APP,
        _type: axiosConfig.TYPE,
        arrange: axiosConfig.ARRANGE,
        numOfRows: axiosConfig.NUM_OF_ROWS,
        pageNo: state.stay.page +1,
      }
    }

    const response = await axios.get(url, config);

    return response.data.response.body;
  }
);

export { 
  stayIndex
};