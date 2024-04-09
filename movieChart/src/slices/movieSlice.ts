import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Movie {
  Response: string;
  Search: [];
  totalResults: string;
}

const url = `${import.meta.env.VITE_API_URL}?apikey=${
  import.meta.env.VITE_API_KEY
}&`;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    getAllMovies: builder.query<Movie[], { query: string }>({
      query: ({ query }) => ({
        url: query,
      }),
    }),
    getMovieDetail: builder.query<Movie, string>({
      query: (movieId) => `${movieId}`,
    }),
  }),
});

export const { useGetAllMoviesQuery, useGetMovieDetailQuery } = moviesApi;
