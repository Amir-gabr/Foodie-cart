//
//
//
//
//
//

import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { request, gql } from "graphql-request";

// Async thunk to fetch categories data
export const getResDetailsData = createAsyncThunk(
  "resDetails/getResDetailsData",
  async (businessSlug) => {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    // Define the GraphQL query
    const query = gql`
      query Restaurant {
        restaurant(where: { slug: "${businessSlug}" }) {
          id
          name
          aboutUs
          address
          banner {
            height
            url
            width
          }
          slug
          workingHours
          restaurantType
          menu {
            ... on Menu {
              id
              category
              menuItem {
                ... on MenuItem {
                  id
                  name
                  description
                  image {
                    height
                    url
                    width
                  }
                  price
                }
              }
            }
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
  resDetails: [],
  isLoading: false,
  isError: null,
};

const resDetailsSlice = createSlice({
  name: "resDetails",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getResDetailsData.fulfilled, (state, action) => {
        state.resDetails = action.payload?.restaurant;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getResDetailsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getResDetailsData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});


export const resDetailsReducer = resDetailsSlice.reducer;

