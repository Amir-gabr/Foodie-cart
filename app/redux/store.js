//
//
//

import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categoriesSlice";
import { restaurantsReducer } from "./restaurantsSlice";
import { resDetailsReducer } from "./resDetailsSlice";
import { cartReducer } from "./addToCartSlice";
import { userCartReducer } from "./cartDataSlice";
import { disconnectResReducer } from "./disconnectResSlice";
import { removeItemReducer } from "./removeItemSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    restaurants: restaurantsReducer,
    resDetails: resDetailsReducer,
    userCart: cartReducer,
    cartData: userCartReducer,
    disconnectedRes: disconnectResReducer,
    removedItem: removeItemReducer,
  },
});
