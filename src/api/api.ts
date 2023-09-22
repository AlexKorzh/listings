import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://uh9mp9f92g.execute-api.us-east-1.amazonaws.com/production';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getAllListings: builder.query({
      query: () => ({
        url: `/test-get-listings`,
        method: 'GET',
      }),
      transformResponse: (response: any) => response.results,
    }),
    getListingsByAddress: builder.query({
      query: ({ address }) => ({
        url: `/test-get-listings?query=${address}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => response.results,
    }),
  }),
});

export const { useGetAllListingsQuery, useGetListingsByAddressQuery } = api;
