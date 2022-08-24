import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
import {URL} from './../../API/constant'


const initialState = {
    posts: [],
    loading: false,
    error: "",
  };
  
  export const fetchPosts = createAsyncThunk("posts/fetchPosts", async(number=1) => {
    return axios.get(`${URL}/products?_page=${number}&_limit=5`)
      .then((res) => res.data)
      .catch((error) => error.message);
  });
  export const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchPosts.pending, (state) => {
        return { ...state, loading: true };
      });
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        return { ...state, loading: false, posts: action.payload };
      });
      builder.addCase(fetchPosts.rejected, (state, action) => {
        return { posts: [], loading: false, error: action.payload };
      });
    
     
     
    },
  });
  
  export default postsSlice.reducer;