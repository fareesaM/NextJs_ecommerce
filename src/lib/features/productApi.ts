/* eslint-disable */
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "https://dummyjson.com" });

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page = 1, category = "all", sort = "price" }) => {
        const limit = 12;
        const skip = (page - 1) * limit;
        let url = `/products?limit=${limit}&skip=${skip}`;
        if (category !== "all") url = `/products/category/${category}?limit=${limit}&skip=${skip}`;
        return url;
      },
      transformResponse: (response: { products: any[] }, meta, arg) => {
        if (arg.sort === "price") {
          return { products: response.products.sort((a, b) => a.price - b.price) };
        }
        if (arg.sort === "rating") {
          return { products: response.products.sort((a, b) => b.rating - a.rating) };
        }
        return response
    }
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getRelatedProducts: builder.query({
      query: ({ category, excludeId }) => `/products/category/${category}?limit=4&exclude=${excludeId}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetRelatedProductsQuery } = productsApi;

export const fetchProductById = async (id) => {
  const response = await baseQuery(`/products/${id}`, {});
  return response.data;
};
