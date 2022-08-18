import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
const URL='http://localhost:3001'

const initialState = {
    category: [],
    loading: false,
    error: "",
  };
  
  export const fetchCategory = createAsyncThunk("category/fetchCategory", async() => {
    return fetch(`${URL}/category`)
      .then((res) => res.json()).then((data)=>{return data})
      .catch((error) => error.message);
  });
  export const categorySlice = createSlice({
    name: "category",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchCategory.pending, (state) => {
        return { ...state, loading: true };
      });
      builder.addCase(fetchCategory.fulfilled, (state, action) => {
        return { ...state, loading: false, category: action.payload };
      });
      builder.addCase(fetchCategory.rejected, (state, action) => {
        return { category: [], loading: false, error: action.payload };
      });
    
     
     
    },
  });
  
  export default categorySlice.reducer;