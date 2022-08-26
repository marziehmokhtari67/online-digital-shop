import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "./../../API/constant";
import axios from "axios";
const initialState = {
  orders: [],
  loading: false,
  error: "",
  totalCount: 0,
};

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async ({ delivered, number }) => {
    return axios
      .get(`${URL}/orders?delivered=${delivered}&_page=${number}&_limit=5`)
      .then((res) => {
        return { data: res.data, headers: res.headers["x-total-count"] };
      })
      .catch((error) => error.message);
  }
);
export const changeDelivered = createAsyncThunk(
  "orders/changeDelivered",
  async (id) => {
    return axios
      .patch(`${URL}/orders/${id}`, { delivered: "true" })
      .then((res) => res.data);
  }
 
);
export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    // fetch data
    builder.addCase(fetchOrders.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      const { data, headers } = action.payload;

      return { ...state, loading: false, orders: data, totalCount: headers };
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      return { orders: [], loading: false, error: action.payload };
    });

    // fetch updata
    builder.addCase(changeDelivered.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(changeDelivered.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(changeDelivered.rejected, (state, action) => {
      return { orders: [], loading: false, error: action.payload };
    });
  },
});

export default ordersSlice.reducer;
