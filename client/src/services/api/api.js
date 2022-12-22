import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminapi",
  tagTypes: ["User", "Products"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (id) => ({
        url: `/general/user/${id}`,
      }),
      providesTags: ["User"],
    }),
    getProducts: builder.query({
      query: () => ({
        url: `/client/products`,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetUsersQuery, useGetProductsQuery } = api;
