import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.REACT_APP_API_URL;

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/videos/`,
  }),
  tagTypes: ["Videos"],
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
      query() {
        return {
          url: "downloadable",
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
          url: "download",
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
