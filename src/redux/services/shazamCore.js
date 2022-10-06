import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "fc618428f2msh0011d052f97b82bp1e148ajsnfb017a6e88e8"
      );
      return headers;
    },
  }),
  endpoints : (builder) => ({
    getTopCharts : builder.query({ query: () => '/charts/world' })
  })
});


export const {
    useGetTopChartsQuery,
} = shazamCoreApi;