import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.REACT_APP_API_URL;

export const statsApi = createApi({
  reducerPath: "statsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/stats/`,
  }),
  endpoints: (builder) => ({
    getMyStats: builder.query({
      query() {
        return {
          url: "marketeer",
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
    updateJackpot: builder.mutation({
      query(data) {
        return {
          url: "jackpot",
          method: "POST",
          body: data,
        };
      },
    }),
    getAdminStats: builder.query({
      query() {
        return {
          url: "admin",
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
