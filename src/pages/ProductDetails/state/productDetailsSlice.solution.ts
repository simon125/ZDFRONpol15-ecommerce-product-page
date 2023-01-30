// @ts-nocheck
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { LoadingStatus } from "types";
import { Product } from "../types";
import { ProductDetailsState } from "./types";

const initialState: ProductDetailsState = {
  product: null,
  status: LoadingStatus.IDLE,
};

export const fetchProduct = createAsyncThunk(
  "products/fetchById",
  async (productId: string, thunkAPI) => {
    return fetch(`http://localhost:3005/products/${productId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => {
        return thunkAPI.fulfillWithValue(data);
      })
      .catch((err) => {
        return thunkAPI.rejectWithValue(err);
      });
  }
);

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.status = LoadingStatus.SUCCESS;
          state.product = action.payload;
        }
      )
      .addCase(fetchProduct.pending, (state) => {
        state.status = LoadingStatus.LOADING;
        state.product = null;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = LoadingStatus.ERROR;
        state.product = null;
      });
  },
});

export const selectProduct = (state: RootState) => state.productDetails.product;

export const selectProductLoadingStatus = (state: RootState) =>
  state.productDetails.status;

export const { resetState } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
