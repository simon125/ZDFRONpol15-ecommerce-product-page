import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";

// https://redux-toolkit.js.org/tutorials/quick-start
// https://redux-toolkit.js.org/tutorials/typescript

export const store = configureStore({
  reducer: {},
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
