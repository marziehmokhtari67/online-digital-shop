import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../API/constant";
import instance from "../../API/http";
const initialState = {
  products: [],
  loading: false,
  error: "",
  totalCount: 0,
  
};
//fetchProduct
export const fetchProduct= createAsyncThunk(
  "product/fetchProduct",
  async (number = 1) => {
    return axios
      .get(`${URL}/products?_page=${number}&_limit=5`)
      .then((res) => {
        return { data: res.data, headers: res.headers["x-total-count"] };
      })
      .catch((error) => error.message);
  }
);
// fetchDelete
export const fetchDelete = createAsyncThunk("product/fetchDelete", async (id) => {
  return instance.delete(`/products/${id}`).then((res) => res.data);
});
// fetchEdit
export const fetchEdit = createAsyncThunk("posts/fetchEdit", async ({id,formData}) => {
  return instance.put(`/products/${id}`,formData).then((res) => res);
});
// fetch add
export const fetchAdd = createAsyncThunk("posts/fetchAdd", async (formData) => {
  return instance.post('/products',formData).then((res) => res)})
  //fetch patch 
  export const fetchPatch = createAsyncThunk("posts/fetchPatch", async ({id,rowData}) => {
    return instance.patch(`/products/${id}`,rowData).then((res) => res);
  });

  // ////////
export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
     //get product
    builder.addCase(fetchProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        products: action.payload.data,
        totalCount: action.payload.headers,
      };
    });
   
    builder.addCase(fetchProduct.rejected, (action) => {
      return { posts: [], loading: false, error: action.payload };
    });
    // delete product
    builder.addCase(fetchDelete.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchDelete.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(fetchDelete.rejected, (action) => {
      return { posts: [], loading: false, error: action.payload };
    });
   //edit product
    builder.addCase(fetchEdit.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchEdit.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(fetchEdit.rejected, (action) => {
      return { posts: [], loading: false, error: action.payload };
    });
    //add product

    builder.addCase(fetchAdd.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchAdd.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(fetchAdd.rejected, (action) => {
      return { posts: [], loading: false, error: action.payload };
    });
    // ////edit price and quantity of products
    
    builder.addCase(fetchPatch.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPatch.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(fetchPatch.rejected, (action) => {
      return { posts: [], loading: false, error: action.payload };
    });

  },
 
  
});

export default productsSlice.reducer;
