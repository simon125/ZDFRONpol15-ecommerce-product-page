// @ts-nocheck
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { LoadingStatus } from "types";
import { Product } from "../types";
import { ProductDetailsState } from "./types";

const initialState: ProductDetailsState = {};
// todo stwórz async thunka który pobierze dane o produkcie
export const fetchProduct = createAsyncThunk(
  "",
  async (productId: string, thunkAPI) => {}
);

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const selectProduct = () => {};

export const selectProductLoadingStatus = () => {};

export const { resetState } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
