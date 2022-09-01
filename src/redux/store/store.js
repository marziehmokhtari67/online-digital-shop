import { configureStore } from "@reduxjs/toolkit";
import productsSlice from '../reducer/productSlice'
import categorySlice from '../reducer/categorySlice'
import ordersSlice from '../reducer/orderSlice'
import loginSlice from '../reducer/loginSlice'
import prdtCategorySlice from '../reducer/prdtCategorySlice'
const store=configureStore({
    reducer:{
        products:productsSlice,
        category:categorySlice,
        orders:ordersSlice,
        login:loginSlice,
        prdtCategory:prdtCategorySlice,
    }
})
export default store