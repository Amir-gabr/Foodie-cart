//
//
"use client";
//

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { CartUpdateContext } from "./../_context/CartUpdateContext";

export default function ClientProvider({ children }) {
  const [updateCart, setUpdateCart] = useState(false);
  return (
    <div className="md:px-0 px-3">
      <Provider store={store}>
        <CartUpdateContext.Provider value={{ updateCart, setUpdateCart }}>
          <Header />
          {children}
          <Footer />
        </CartUpdateContext.Provider>
      </Provider>
    </div>
  );
}
