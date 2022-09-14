import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {SharedCustomerLayout,Home,Category,Product,FinalizePayment,Cart,ResultOfPayment,Login,
SharedManagmentLayout,InventoryPrices,Goods,Order,Error} from './../pages/index'
import PrivateRoute from './../components/route/PrivateRoute'
function Rout() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedCustomerLayout />}>
        <Route index element={<Home />} />
        <Route path="category/:categoryId" element={<Category />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="finalizePayment" element={<FinalizePayment />} />
        <Route
          path="result/:result"
          element={<ResultOfPayment />}
        />
      </Route>
      
      <Route path="login" element={<Login />} />
      <Route path="managment" element={
        <PrivateRoute>
        <SharedManagmentLayout />
        </PrivateRoute>
        
    
      }>
        
        <Route index element={<Order />} />
        <Route path="inventoryPrices" element={<InventoryPrices />} />
        <Route path="goods" element={<Goods />} />
     
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
    
  </BrowserRouter>
  
  )
}

export default Rout


// values?.price
// ? values?.price
// .toString()
// .replace(/\./g, "")
// .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
// : null
