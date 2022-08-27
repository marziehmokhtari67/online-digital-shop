import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "./../../API/http";

const initialState = {
  isLogined: false,
  error: "",
};
export const fetchLogin = createAsyncThunk("login/fetchLogin", async (user) => {
  try {
    return axios.post("/auth/login", user).then((response) => {
      localStorage.setItem("ACCESS_TOKEN", response.data.accessToken);
      localStorage.setItem("REFRESH_TOKEN", response.data.refreshToken);
    });
  } catch (error) {
    return Promise.reject(error.response.data);
  }
});
export const refreshToken = createAsyncThunk(
  "login/refreshToken",
  async (user) => {
    try {
      axios.post("/auth/refresh-token", user).then((response) => {
        localStorage.setItem("ACCESS_TOKEN", response.data.accessToken);
      });
    } catch (error){ return Promise.reject(error.response.data)} 
   
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: {
    // fetch
    [fetchLogin.fulfilled]: (state) => {
      state.isLogined = true;
      state.error = "";
    },
    [fetchLogin.rejected]: (state, action) => {
      state.isLogined = false;
      state.error = action.error.message;
    },
    // refreshtoken
    [refreshToken.fulfilled]: (state) => {
        state.isLogined = true;
        state.error = "";
      },
      [refreshToken.rejected]: (state, action) => {
        state.isLogined = false;
        state.error = action.error.message;
      },
  },
});
export default loginSlice.reducer;
