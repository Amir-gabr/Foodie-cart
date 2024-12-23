//
//
//

import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { request, gql } from "graphql-request"; 

// Async thunk to fetch categories data
export const getRestaurantsData = createAsyncThunk(
  "restaurants/getRestaurantsData",
  async (category) => {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    // Define the GraphQL query
    const query =
      gql`
      query Restaurants {
        restaurants(where: { categories_some: { slug:"${category}"} },first: 30) {
          id
          name
          aboutUs
          address
          banner {
            url
            height
            width
          }
          categories {
            name
          }
          restaurantType
          slug
          workingHours
        }
      }
    `;

    try {
      // Perform the GraphQL request
      const response = await request(baseUrl, query);

      // Directly return the response, as `graphql-request` doesn't have a `data` wrapper
      return response;
    } catch (error) {
      console.error(error);
      throw error; // This will let the thunk catch and handle the error
    }
  }
);

// Initial state
const initialValues = {
  restaurants: [],
  isLoading: false,
  isError: null,
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: initialValues,
  reducers:{},
  extraReducers: (builder) => {
      builder
      .addCase(getRestaurantsData.fulfilled, (state, action) => {
          state.restaurants = action.payload?.restaurants;
          state.isLoading = false;
          state.isError = null;
      })
      .addCase(getRestaurantsData.pending, (state) => {
          state.isLoading = true;
      })
      .addCase(getRestaurantsData.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = action.error.message;
      })
  }
});


export const restaurantsReducer = restaurantsSlice.reducer