import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest, refreshTokenRequest } from "./../../api/user"
import axios from 'axios'

const initialState = {
  isLogined: localStorage.getItem('IS_LOGGGED_IN')
  ? localStorage.getItem('IS_LOGGGED_IN')
  : false,
  error: "",
};
export const fetchLogin = createAsyncThunk("login/fetchLogin", 
(user) => {
  return loginRequest(user)
    .then((response) => {
      localStorage.setItem('ACCESS_TOKEN', response.accessToken);
      localStorage.setItem('REFRESH_TOKEN', response.refreshToken);
      localStorage.setItem('IS_LOGGGED_IN', true);
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
  })
export const refreshToken = createAsyncThunk(
  "login/refreshToken",
  async () => {
    return refreshTokenRequest()
    .then((response) => {
      localStorage.setItem('ACCESS_TOKEN', response.accessToken);
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    }); 
   
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
