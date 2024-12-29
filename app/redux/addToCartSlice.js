//
//
//
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request, gql } from "graphql-request";

// Async thunk to fetch categories data
export const addToCart = createAsyncThunk("cart/AddToCart", async (data) => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  // Define the GraphQL query
  const query = gql`
    mutation AddToCart {
      createUserCart(
        data: {
          email: "${data?.email}",
          price: "${data?.price}",
          productDescription: "${data?.description}",
          productImage: "${data?.url}",
          productName: "${data?.name}",
        }
      ) {
        id
      }
      publishManyUserCarts(to: PUBLISHED) {
        count
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
});

// Initial state
const initialValues = {
  cart: [],
  isLoading: false,
  isError: null,
};

// Create a slice for categories
const cartSlice = createSlice({
  name: "cart",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload.cart; // The categories come directly from the payload
      })
      .addCase(AddToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

// Export the categories reducer
export const cartReducer = cartSlice.reducer;
