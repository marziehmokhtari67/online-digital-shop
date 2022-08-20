import { configureStore } from "@reduxjs/toolkit";
import postsSlice from '../reducer/postSlice'
import categorySlice from '../reducer/categorySlice'
import ordersSlice from '../reducer/orderSlice'
const store=configureStore({
    reducer:{
        posts:postsSlice,
        category:categorySlice,
        orders:ordersSlice
    }
})
export default store