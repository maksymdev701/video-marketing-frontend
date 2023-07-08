import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./user-api";

const BASE_URL = process.env.REACT_APP_API_URL;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth/`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query(data) {
        return {
          url: "register",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: "login",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),
    verifyEmail: builder.mutation({
      query({ verificationCode }) {
        return {
          url: `verifyemail/${verificationCode}`,
          method: "PATCH",
          credentials: "include",
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),
    resetPassword: builder.mutation({
      query(data) {
        return {
          url: "/resetpassword",
          method: "PATCH",
          body: data,
        };
      },
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: "logout",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,
} = authApi;
