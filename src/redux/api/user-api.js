import { createApi } from "@reduxjs/toolkit/query/react";
import { setUser } from "../features/user-slice";
import customFetchBase from "./custom-fetchbase";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customFetchBase,
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query() {
        return {
          url: "users/me",
          credentials: "include",
        };
      },
      transformResponse: (result) => result.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),
    getUsers: builder.query({
      query() {
        return {
          url: "users",
          credentials: "include",
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Users",
                id,
              })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
      transformResponse: (results) => results.users,
    }),
    createUser: builder.mutation({
      query(data) {
        return {
          url: "users",
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    updateChannel: builder.mutation({
      query(data) {
        return {
          url: "users/channel",
          method: "PUT",
          credentials: "include",
          body: data,
        };
      },
    }),
    updateUser: builder.mutation({
      query(data) {
        return {
          url: "users",
          method: "PATCH",
          credentials: "include",
          body: data,
        };
      },
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: "Users", id },
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),
    makeContact: builder.mutation({
      query(data) {
        return {
          url: "users/contact",
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateChannelMutation,
  useUpdateUserMutation,
  useMakeContactMutation,
} = userApi;
