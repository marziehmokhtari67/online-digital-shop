import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const URL='http://localhost:3001'


const initialState = {
    posts: [],
    loading: false,
    error: "",
  };
  
  export const fetchPosts = createAsyncThunk("posts/fetchPosts", async(number=1) => {
    return fetch(`${URL}/products?_page=${number}&_limit=5`)
      .then((res) => res.json()).then((data)=>{return data})
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