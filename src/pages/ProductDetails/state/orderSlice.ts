import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { LoadingStatus } from "types";
import { OrderState } from "./types";

const initialState: OrderState = {
  orders: [],
  status: LoadingStatus.IDLE,
  amount: "0",
};

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (_: void, thunkAPI) => {
    const orders = (thunkAPI.getState() as RootState).order.orders;
    return fetch(`http://localhost:3005/orders`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(orders),
    })
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

export const ordersSlice = createSlice({
  name: "orderSlice",
  initialState: initialState,
  reducers: {
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    resetState: () => initialState,
  },
});

export const selectOrders = (state: RootState) => state.order.orders;

export const selectOrderAmount = (state: RootState) => state.order.amount;

export const selectOrderLoadingStatus = (state: RootState) =>
  state.order.status;

export const { resetState, setAmount } = ordersSlice.actions;

export default ordersSlice.reducer;
