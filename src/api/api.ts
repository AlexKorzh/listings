import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://uh9mp9f92g.execute-api.us-east-1.amazonaws.com/production';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  // tagTypes: ['Versions', 'Users'],
  endpoints: (builder) => ({
    getAllListings: builder.query({
      query: ({ }) => ({
        url: `/test-get-listings`,
        method: 'GET',
      }),
      transformResponse: (response: any) => response.results,
      // providesTags: ['Versions'],
    }),
  }),
});

export const { useGetAllListingsQuery } = api;
