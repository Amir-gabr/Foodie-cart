//
//
"use client";
//

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { store } from "../redux/store";
import { Provider } from "react-redux";

export default function ClientProvider({ children }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        {children}
        <Footer />
      </Provider>
    </>
  );
}
