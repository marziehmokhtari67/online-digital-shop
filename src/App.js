import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedCustomerLayout from "./Layout/SharedCustomerLayout";
import SharedManagmentLayout from "./Layout/SharedManagmentLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import FinalizePayment from "./pages/FinalizePayment";
import PaymentGateWay from "./pages/PaymentGateWay";
import ResultOfPayment from "./pages/ResultOfPayment";
import Cancelation from "./pages/Cancelation";
import Login from "./pages/Login";
import Order from "./pages/Order";
import InventoryPrices from "./pages/InventoryPrices";
import Goods from "./pages/Goods";


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
