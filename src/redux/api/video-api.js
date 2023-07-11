import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./custom-fetchbase";

const BASE_URL = process.env.REACT_APP_API_URL;

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: customFetchBase,
  tagTypes: ["Videos"],
  endpoints: (builder) => ({
    uploadVideo: builder.mutation({
      query(data) {
        return {
          url: "videos/upload",
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Videos", id: "LIST" }],
    }),
    getDownloadableVideos: builder.query({
      query() {
        return {
          url: "videos/downloadable",
          credentials: "include",
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.videos.map(({ id }) => ({
                type: "Videos",
                id,
              })),
              { type: "Videos", id: "LIST" },
            ]
          : [{ type: "Videos", id: "LIST" }],
    }),
    downloadVideo: builder.mutation({
      query(data) {
        return {
          url: "videos/download",
          method: "PUT",
          credentials: "include",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Videos", id: "LIST" }],
    }),
  }),
});

export const {
  useUploadVideoMutation,
  useGetDownloadableVideosQuery,
  useDownloadVideoMutation,
} = videoApi;
