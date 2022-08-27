import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from './../../api/http'


const initialState = {
    posts: [],
    loading: false,
    error: "",
    totalCount:0
  };
  export const fetchPosts = createAsyncThunk("posts/fetchPosts", async(number=1) => {
    return axios.get(`/products?_page=${number}&_limit=5`)
      .then((res) => {return{data:res.data, headers:res.headers["x-total-count"]}})
      .catch((error) => error.message);
  });
  export const fetchDelet = createAsyncThunk('posts/fetchDelet',async(id)=>{
    return axios.delete(`/products/${id}`
    ).then(res=>res.data)
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
           };
      });
      builder.addCase(fetchDelet.rejected, (action) => {
        return { posts: [], loading: false, error: action.payload };
      });
    
    
     
     
    },
  });
  
  export default postsSlice.reducer;