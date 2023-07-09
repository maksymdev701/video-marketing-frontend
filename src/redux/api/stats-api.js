import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./custom-fetchbase";

const BASE_URL = process.env.REACT_APP_API_URL;

export const statsApi = createApi({
  reducerPath: "statsApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getMyStats: builder.query({
      query() {
        return {
          url: "stats/marketeer",
          credentials: "include",
        };
      },
      transformResponse: (result) => result.stats,
    }),
    getCreatorStats: builder.query({
      query() {
        return {
          url: "stats/creator",
          credentials: "include",
        };
      },
      transformResponse: (result) => result.stats,
    }),
    updateJackpot: builder.mutation({
      query(data) {
        return {
          url: "stats/jackpot",
          method: "POST",
          body: data,
        };
      },
    }),
    getAdminStats: builder.query({
      query() {
        return {
          url: "stats/admin",
          credentials: "include",
        };
      },
      transformResponse: (result) => result.info,
    }),
  }),
});

export const {
  useGetMyStatsQuery,
  useGetCreatorStatsQuery,
  useUpdateJackpotMutation,
  useGetAdminStatsQuery,
} = statsApi;
