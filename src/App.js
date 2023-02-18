// @flow

import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import CustomerSignin from "./routes/signin/customer-signin.component";
import AdminSignin from "./routes/signin/admin-signin.component";
import Checkout from "./routes/checkout/checkout.component";
export const Array = [99, true, "App", 45.35, false];

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth1" element={<CustomerSignin />} />
        <Route path="/auth2" element={<AdminSignin />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
