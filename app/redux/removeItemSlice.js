//
//
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request, gql } from "graphql-request";


export const getRemovedItem = createAsyncThunk(
  "remove/getRemovedItem",
    async (id) => {
      const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
      console.log(id);
    const query = gql`
      mutation DeleteCartItems {
        deleteUserCart(where: { id: `+id+` }) {
          id
        }
      }
    `;
    try {
      const response = await request(baseUrl, query);
      return response;
    } catch (error) {
      console.error("Error removing item from cart:", error);
      throw error;
    }
  }
);

// Initial state
const initialValues = {
  removeItem: [],
  isLoading: false,
  isError: null,
};

// Create a slice for removeItem
const removeItemSlice = createSlice({
  name: "remove",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRemovedItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.removeItem = action.payload;
        console.log("Removed Items:", state.removeItem);
      })
      .addCase(getRemovedItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRemovedItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

// Export the reducer
export const removeItemReducer = removeItemSlice.reducer;

