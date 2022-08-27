import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { refreshTokenRequest } from "./../../API/user"
import axios from 'axios'
import {URL} from './../../API/constant'

const initialState = {
  isLogined: localStorage.getItem('IS_LOGGGED_IN')
  ? localStorage.getItem('IS_LOGGGED_IN')
  : false,
  error: "",
};
export const fetchLogin = createAsyncThunk("login/fetchLogin", 
async(user) => { try{
  return axios.post(`${URL}/auth/login`,user)
  .then((response) => {
    localStorage.setItem('ACCESS_TOKEN', response.data.accessToken);
    localStorage.setItem('REFRESH_TOKEN', response.data.refreshToken);
    localStorage.setItem('IS_LOGGGED_IN', true);
    return response;
  })}
  catch(error) {
    return Promise.reject(error.response.data)}
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
