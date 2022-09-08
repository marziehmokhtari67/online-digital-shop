import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {URL} from './../../API/constant'
import instance from './../../API/http'
const initialState = {
  orders: [],
  loading: false,
  error: "",
  totalCount: 0,
};

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async ({ delivered, number=1 }) => {
    return axios
      .get(`${URL}/orders?delivered=${delivered}&_page=${number}&_limit=4`,
     )
      .then((res) => {
        return { data: res.data, headers: res.headers["x-total-count"] };
      })
      .catch((error) => error.message);
  }
);
export const addOrders = createAsyncThunk(
  "orders/addOrders",
  async (clientData) => {
    return axios
      .post(`${URL}/orders`,clientData)
      .then((res) => res.data
      )
      .catch((error) => error.message);
  }
);

export const changeDelivered = createAsyncThunk(
  "orders/changeDelivered",
  async (id) => {
    return instance
      .patch(`/orders/${id}`, { delivered: "true" })
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
    // ///fetch add orders
    builder.addCase(addOrders.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(addOrders.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(addOrders.rejected, (state, action) => {
      return { orders: [], loading: false, error: action.payload };
    });
  },
});

export default ordersSlice.reducer;
