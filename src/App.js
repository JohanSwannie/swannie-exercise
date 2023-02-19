// @flow
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Signin from "./routes/signin/signin.component";
import Customer from "./routes/customer/customer.component";
import Administrator from "./routes/administrator/administrator.component";
import Checkout from "./routes/checkout/checkout.component";
// export const Array = [99, true, "App", 45.35, false];

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Signin />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/admin" element={<Administrator />} />
      </Routes>
    </div>
  );
}

export default App;
