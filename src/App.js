import { BrowserRouter, Routes, Route } from "react-router-dom";
import {SharedCustomerLayout,Home,Category,Product,FinalizePayment,Cart,ResultOfPayment,Cancelation,PaymentGateWay,Login,
  SharedManagmentLayout,InventoryPrices,Goods,Order} from './pages/index'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedCustomerLayout />}>
            <Route index element={<Home />} />
            <Route path="category/:categoryId" element={<Category />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="finalizePayment" element={<FinalizePayment />} />
            <Route
              path="finalizePayment/result"
              element={<ResultOfPayment />}
            />
            <Route
              path="finalizePayment/cancelation"
              element={<Cancelation />}
            />
          </Route>
          <Route path="paymentGatetWay" element={<PaymentGateWay />} />
          <Route path="login" element={<Login />} />
          <Route path="managment" element={<SharedManagmentLayout />}>
            <Route index element={<Order />} />
            <Route path="inventoryPrices" element={<InventoryPrices />} />
            <Route path="goods" element={<Goods />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
