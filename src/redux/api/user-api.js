import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../features/user-slice";

const BASE_URL = process.env.REACT_APP_API_URL;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/users/`,
  }),
  tagTypes: ["User"],
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
    }),
    getMyStats: builder.query({
      query() {
        return {
          url: "stats",
          credentials: "include",
        };
      },
      transformResponse: (result) => result.stats,
    }),
    getCreatorStats: builder.query({
      query() {
        return {
          url: "creator",
          credentials: "include",
        };
      },
      transformResponse: (result) => result.stats,
    }),
  }),
});

export const { useGetMyStatsQuery, useGetCreatorStatsQuery } = userApi;
