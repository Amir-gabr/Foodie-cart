//
//
//

import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categoriesSlice";
import { restaurantsReducer } from "./restaurantsSlice";
import { resDetailsReducer } from "./resDetailsSlice";
import { cartReducer } from "./addToCartSlice";
import { userCartReducer } from "./cartDataSlice";
import { removeItemReducer } from "./disconnect&removeItemSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    restaurants: restaurantsReducer,
    resDetails: resDetailsReducer,
    userCart: cartReducer,
    cartData: userCartReducer,
    removeItem: removeItemReducer,
  },
});
