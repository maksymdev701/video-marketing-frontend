import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth-api";
import { userApi } from "./api/user-api";
import { videoApi } from "./api/video-api";
import userReducer from "./features/user-slice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [videoApi.reducerPath]: videoApi.reducer,
    userState: userReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
      videoApi.middleware,
    ]),
});
