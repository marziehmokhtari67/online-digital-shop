import { configureStore } from "@reduxjs/toolkit";
import productsSlice from '../reducer/productSlice'
import categorySlice from '../reducer/categorySlice'
import ordersSlice from '../reducer/orderSlice'
import loginSlice from '../reducer/loginSlice'

const store=configureStore({
    reducer:{
        products:productsSlice,
        category:categorySlice,
        orders:ordersSlice,
        login:loginSlice,
       
    }
})
export default store