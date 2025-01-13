import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request, gql } from "graphql-request";


export const disconnectRestaurant = createAsyncThunk(
  "removeItem/disconnectRestaurant",
  async (id) => {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    // Define the GraphQL query
    const query = gql`
      mutation DisconnectRestaurant {
        updateUserCart(
          data: { restaurant: { disconnect: true } }
          where: { id: "${id}" }
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
  }
);
export const removeItemFromCart = createAsyncThunk("removeItem/removeItemFromCart", async (id) => {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    // Define the GraphQL query
    const query = gql`
      mutation DeleteCartItem {
        deleteUserCart(where: { id: "${id}" }) {
          id
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
})


// Initial state
const initialValues = {
  disconnectedItems: [],
  removedItems: [],
  isLoading: false,
  isError: null,
};

// Create a slice for removeItem
const removeItemSlice = createSlice({
  name: "removeItem",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(disconnectRestaurant.fulfilled, (state, action) => {
      state.isLoading = false;
      state.disconnectedItems = action.payload; 
      console.log(state.removedItems);
    })
    .addCase(disconnectRestaurant.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(disconnectRestaurant.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    })
    .addCase(removeItemFromCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.removedItems = action.payload; 
      console.log(state.removedItems);
    })
    .addCase(removeItemFromCart.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(removeItemFromCart.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

// Export the categories reducer
export const removeItemReducer = removeItemSlice.reducer;