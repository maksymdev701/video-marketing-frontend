import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../features/user-slice";

const BASE_URL = process.env.REACT_APP_API_URL;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/users/`,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query() {
        return {
          url: "me",
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
          url: "",
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
          url: "",
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
          url: "channel",
          method: "PUT",
          credentials: "include",
          body: data,
        };
      },
    }),
    updateUser: builder.mutation({
      query(data) {
        return {
          url: "",
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
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateChannelMutation,
  useUpdateUserMutation,
} = userApi;
