import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
const URL='http://localhost:3001'
const initialState = {
    orders: [],
    loading: false,
    error: "",
  };
  
  export const fetchOrders = createAsyncThunk("orders/fetchOrders", async(delivered,number=1) => {
    console.log(number)
    return fetch(`${URL}/orders?delivered=${delivered}&_page=${number}&_limit=6`)
      .then((res) => res.json()).then((data)=>{return data})
      .catch((error) => error.message);
  });
  export const ordersSlice = createSlice({
    name: "orders",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchOrders.pending, (state) => {
        return { ...state, loading: true };
      });
      builder.addCase(fetchOrders.fulfilled, (state, action) => {
        return { ...state, loading: false, orders: action.payload };
      });
      builder.addCase(fetchOrders.rejected, (state, action) => {
        return { orders: [], loading: false, error: action.payload };
      });
    
     
     
    },
  });
  
  export default ordersSlice.reducer;