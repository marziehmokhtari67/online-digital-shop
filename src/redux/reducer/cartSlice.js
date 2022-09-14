import {createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  
  cartTotalAmount: 0,
  success:false,
  
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          count:action.payload.count,
        };
       
      } else {
        let tempProductItem = { ...action.payload, count: action.payload.count};
        state.cartItems.push(tempProductItem);
      
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
     
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, count} = cartItem;
          const itemTotal = price * count;
          cartTotal.total += itemTotal;
          cartTotal.quantity += count;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    deleteCart(state,action){
        state.cartItems=state.cartItems.filter(cartItem=>cartItem.id!==action.payload)
     const  array=  JSON.parse(localStorage.getItem("cartItems")).filter(item=>item.id!==action.payload)
     localStorage.setItem("cartItems",JSON.stringify(array))
    },
  cleareCartItem(state){
    state.cartItems=[]
    localStorage.removeItem("cartItems")
  }  
  },
});
export const { addToCart, getTotals,deleteCart,cleareCartItem } = cartSlice.actions;
export default cartSlice.reducer;
