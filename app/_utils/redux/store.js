//
//
//

import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categoriesSlice";
import { restaurantsReducer } from "./restaurantsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    restaurants:restaurantsReducer,
  },
});