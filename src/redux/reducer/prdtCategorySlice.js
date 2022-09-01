import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../API/constant";

const initialState = {
  prdtCategory: [],
  error: "",
  loading: false,
  totalCount: 0,
};
export const fetchPrdtCategory = createAsyncThunk(
  "prdtCategory/fetchPrdtCategory",
  async (categoryId) => {
    return axios
      .get(`${URL}/products?category=${categoryId}`)
      .then((res) => {
        return { data: res.data, headers: res.headers["x-total-count"] };
      })
      .catch((error) => error.message);
  }
);

export const prdtCategorySlice = createSlice({
  name: "prdtCategory",
  initialState,
  extraReducers: (builder) => {
    // fetch data
    builder.addCase(fetchPrdtCategory.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPrdtCategory.fulfilled, (state, action) => {
      const { data, headers } = action.payload;

      return {
        ...state,
        loading: false,
        prdtCategory: data,
        totalCount: headers,
      };
    });
    builder.addCase(fetchPrdtCategory.rejected, (state, action) => {
      return { prdtCategory: [], loading: false, error: action.payload };
    });
  },
});
export default prdtCategorySlice.reducer;
