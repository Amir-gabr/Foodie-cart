//
//
//

import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categoriesSlice";
import { restaurantsReducer } from "./restaurantsSlice";
import { resDetailsReducer } from "./resDetailsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    restaurants: restaurantsReducer,
    resDetails: resDetailsReducer,
  },
});