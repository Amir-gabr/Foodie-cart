
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { gql } from 'graphql-request';
import { request } from 'graphql-request';





export const getUserCartData = createAsyncThunk("cartData/getUserCartData", async (email) => {
    //
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    //
    const query = gql`
      query GetUserCartData {
        userCarts(where: { email: "${email}" }) {
          id
          productDescription
          productImage
          productName
          price
          restaurant {
            id
            name
            slug
            banner {
              url
            }
          }
        }
      }
    `;
    try {
        const response = await request(baseUrl, query);
        return response
    }catch(error){
        console.error(error);
        throw error
    }
})
const initialValues = {
    userCarts: [],
    isLoading: false,
    isError: null,
}


const userCartSlice = createSlice({
  name: "cartData",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserCartData.fulfilled, (state, action) => {
        state.userCarts = action.payload;
        state.isLoading = false;
        state.isError = null;
        //   console.log(state.userCarts)
      })
      .addCase(getUserCartData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserCartData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export const userCartReducer = userCartSlice.reducer;