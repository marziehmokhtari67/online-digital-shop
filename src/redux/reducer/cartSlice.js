import {createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  
  cartTotalAmount: 0,
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
          cartQuantity:action.payload.cartQuantity,
        };
       
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: action.payload.cartQuantity };
        state.cartItems.push(tempProductItem);
      
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
     
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
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
    }
  },
});
export const { addToCart, getTotals,deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
