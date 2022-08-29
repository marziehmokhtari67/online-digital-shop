import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../API/constant";
import instance from "../../API/http";
const initialState = {
  posts: [],
  loading: false,
  error: "",
  totalCount: 0,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (number = 1) => {
    return axios
      .get(`${URL}/products?_page=${number}&_limit=5`)
      .then((res) => {
        return { data: res.data, headers: res.headers["x-total-count"] };
      })
      .catch((error) => error.message);
  }
);
export const fetchDelet = createAsyncThunk("posts/fetchDelet", async (id) => {
  return instance.delete(`/products/${id}`).then((res) => res.data);
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        posts: action.payload.data,
        totalCount: action.payload.headers,
      };
    });
    builder.addCase(fetchPosts.rejected, (action) => {
      return { posts: [], loading: false, error: action.payload };
    });
    builder.addCase(fetchDelete.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchDelete.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(fetchDelete.rejected, (action) => {
      return { posts: [], loading: false, error: action.payload };
    });
  },
});

export default postsSlice.reducer;
