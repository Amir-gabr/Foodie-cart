//
//
//

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request, gql } from "graphql-request"; 

// Async thunk to fetch categories data
export const getCategoriesData = createAsyncThunk(
  "categories/getCategoriesData",
  async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    // Define the GraphQL query
    const query = gql`
      query Categories {
        categories(first: 50) {
          id
          slug
          name
          icon {
            url
            height
            width
          }
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
  categories: [],
  isLoading: false,
  isError: null,
};

// Create a slice for categories
const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoriesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload.categories; // The categories come directly from the payload
      })
      .addCase(getCategoriesData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

// Export the categories reducer
export const categoriesReducer = categoriesSlice.reducer;
