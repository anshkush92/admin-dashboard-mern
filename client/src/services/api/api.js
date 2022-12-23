import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminapi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
  ],
  endpoints: (builder) => ({
    // Getting a particular user
    getUsers: builder.query({
      query: (id) => ({
        url: `/general/user/${id}`,
      }),
      providesTags: ["User"],
    }),

    // Getting all the products
    getProducts: builder.query({
      query: () => ({
        url: `/client/products`,
      }),
      providesTags: ["Products"],
    }),

    // Getting all the customers
    getCustomers: builder.query({
      query: () => ({
        url: `/client/customers`,
      }),
      providesTags: ["Customers"],
    }),

    // Doing the server side Pagination to get the transactions, hence sending the params
    getTransactions: builder.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: `/client/transactions`,
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),

    // Getting the data for the NIVO geography chart
    getGeography: builder.query({
      query: () => ({
        url: `/client/geography`,
      }),
      providesTags: ["Geography"],
    }),

    // Getting the sales data for the NIVO line chart
    getSales: builder.query({
      query: () => ({
        url: `/sales/sales`,
      }),
      providesTags: ["Sales"],
    }),

    getAdmins: builder.query({
      query: () => ({
        url: `/management/admins`,
      }),
      providesTags: ["Admins"],
    }),

    getPerformance: builder.query({
      query: (id) => ({
        url: `/management/performance/${id}`,
      }),
      providesTags: ["Performance"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetPerformanceQuery,
} = api;
