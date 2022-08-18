import { configureStore } from "@reduxjs/toolkit";
import postsSlice from './../Reducer/postSlice'
import categorySlice from './../Reducer/CategorySlice'
import ordersSlice from './../Reducer/orderSlice'
const store=configureStore({
    reducer:{
        posts:postsSlice,
        category:categorySlice,
        orders:ordersSlice
    }
})
export default store