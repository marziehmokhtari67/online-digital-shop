import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../API/constant";
import instance from "../../API/http";
const initialState = {
  products: [],
  loading: false,
  error: "",
  totalCount: 0,
  searchResult:false
  
};
//fetchProduct
export const fetchProduct= createAsyncThunk(
  "products/fetchProduct",
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
export const fetchDelete = createAsyncThunk("products/fetchDelete", async (id) => {
  return instance.delete(`/products/${id}`).then((res) => res.data);
});
// fetchEdit
export const fetchEdit = createAsyncThunk("products/fetchEdit", async ({id,formData}) => {
  return instance.put(`/products/${id}`,formData).then((res) => res.data);
});
// fetch add
export const fetchAdd = createAsyncThunk("products/fetchAdd", async (formData) => {
  return instance.post('/products',formData).then((res) => res.data)})
  //fetch patch 
  export const fetchPatch = createAsyncThunk("products/fetchPatch", async ({id,rowData}) => {
    return instance.patch(`/products/${id}`,rowData).then((res) => res.data);
  });
// fetch search
export const fetchSearch = createAsyncThunk("products/fetchSearch", async ({keyword=''}) => {
 console.log(keyword)
return  axios.get(`${URL}/products?name=${keyword}`).then((res) => res);
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
      return { products: [], loading: false, error: action.payload };
    });
    // delete product
    builder.addCase(fetchDelete.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchDelete.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(fetchDelete.rejected, (action) => {
      return { products: [], loading: false, error: action.payload };
    });
   //edit product
    builder.addCase(fetchEdit.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchEdit.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(fetchEdit.rejected, (action) => {
      return { products: [], loading: false, error: action.payload };
    });
    //add product

    builder.addCase(fetchAdd.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchAdd.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(fetchAdd.rejected, (action) => {
      return { products: [], loading: false, error: action.payload };
    });
    // ////edit price and quantity of products
    
    builder.addCase(fetchPatch.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPatch.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(fetchPatch.rejected, (action) => {
      return { products: [], loading: false, error: action.payload };
    });
    // geting result search
    builder.addCase(fetchSearch.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      return { ...state, products:action.payload.data, loading: false,searchResult:true };
    });
    builder.addCase(fetchSearch.rejected, (action) => {
      return { products: [], loading: false, error: action.payload ,searchResult:false};
    });
 

  },
  // serch product
  
  
});

export default productsSlice.reducer;
