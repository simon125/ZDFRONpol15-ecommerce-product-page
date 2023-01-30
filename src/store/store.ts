import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productDetailsReducer from "pages/ProductDetails/state/productDetailsSlice";
import ordersReducer from "pages/ProductDetails/state/orderSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    order: ordersReducer,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
