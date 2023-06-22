import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.REACT_APP_API_URL;

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/videos/`,
  }),
  endpoints: (builder) => ({
    uploadVideo: builder.mutation({
      query(data) {
        return {
          url: "upload",
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
    }),
    getDownloadableVideos: builder.query({
      query(data) {
        return {
          url: "downloadable",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useUploadVideoMutation } = videoApi;
