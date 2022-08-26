import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
import {URL} from './../../API/constant'


const initialState = {
    posts: [],
    loading: false,
    error: "",
    totalCount:0
  };
  const tocken=  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYlVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJuYW1lIjoiQWxpcmV6YSBHaGFyZ2hhYmkiLCJpYXQiOjE2NjE0NTYyNTAsImV4cCI6MTY2MTQ1OTg1MH0.rosNqOXzF8nr2pevdZMi-rIEzu98o3gt7YHEJ-WTWJI"
  
 
  
  export const fetchPosts = createAsyncThunk("posts/fetchPosts", async(number=1) => {
    return axios.get(`${URL}/products?_page=${number}&_limit=5`)
      .then((res) => {return{data:res.data, headers:res.headers["x-total-count"]}})
      .catch((error) => error.message);
  });
  export const fetchDelet = createAsyncThunk('posts/fetchDelet',async(id)=>{
    return axios.delete(`${URL}/products/${id}`, {headers:{
      Authorization: 'Bearer ' + tocken
    }}).then(res=>res.data)
  })
  

  export const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchPosts.pending, (state) => {
        return { ...state, loading: true };
      });
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        return { ...state, loading: false, posts: action.payload.data,totalCount:action.payload.headers };
      });
      builder.addCase(fetchPosts.rejected, (state, action) => {
        return { posts: [], loading: false, error: action.payload };
      });
      builder.addCase(fetchDelet.pending, (state) => {
        return { ...state, loading: true };
      });
      builder.addCase(fetchDelet.fulfilled, (state, action) => {
        return { ...state, loading: false,
          posts: action.payload.data,
          totalCount:action.payload.headers
           };
      });
      builder.addCase(fetchDelet.rejected, (action) => {
        return { posts: [], loading: false, error: action.payload };
      });
    
    
     
     
    },
  });
  
  export default postsSlice.reducer;