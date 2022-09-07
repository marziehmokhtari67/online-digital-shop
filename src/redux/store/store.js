import { configureStore } from "@reduxjs/toolkit";
import productsSlice from '../reducer/productSlice'
import categorySlice from '../reducer/categorySlice'
import ordersSlice from '../reducer/orderSlice'
import loginSlice from '../reducer/loginSlice'
import cartSlice from "../reducer/cartSlice";
const store=configureStore({
    reducer:{
        products:productsSlice,
        category:categorySlice,
        orders:ordersSlice,
        login:loginSlice,
        cart:cartSlice
    }
})
export default store