import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedCustomerLayout from "./pages/SharedCustomerLayout";
import SharedManagmentLayout from "./pages/SharedManagmentLayout";


function App() {
  return (
  <>
<BrowserRouter>
<Routes>
  
  <Route path="/" element={<SharedCustomerLayout />}>

  </Route>
  <Route path="managment" element={<SharedManagmentLayout />}>

  </Route>
</Routes>
</BrowserRouter>

  </> 
  
  );
}

export default App;
