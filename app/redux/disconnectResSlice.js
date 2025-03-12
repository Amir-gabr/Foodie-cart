import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request, gql } from "graphql-request";

// Async Thunks
export const getDisconnectRes = createAsyncThunk(
  "disconnected/disconnectRestaurant",
  async (id) => {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
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
      const response = await request(baseUrl, query);
      return response;
    } catch (error) {
      console.error("Error disconnecting restaurant:", error);
      throw error;
    }
  }
);

// Initial state
const initialValues = {
  disconnectRes: [],
  isLoading: false,
  isError: null,
};

// Create a slice for removeItem
const disconnectResSlice = createSlice({
  name: "disconnected",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDisconnectRes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.disconnectRes = action.payload;
        console.log("Disconnected Items:", state.disconnectRes);
      })
      .addCase(getDisconnectRes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDisconnectRes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

// Export the reducer
export const disconnectResReducer = disconnectResSlice.reducer;
