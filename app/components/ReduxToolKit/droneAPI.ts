import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
// import { CompetencyProfile, IQuiz } from "../reducers/types/adminSlice.d";
// import { setAllQuiz, setCompetenciesProfiles } from "../reducers/adminSlice";
// import { RootState } from "../store";
// import { logoutUser } from "../reducers/authSlice";
// Define your base query function

// Define your base query function
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  // baseUrl: "https://mind.scholarlyhelps.com/v1",
  // prepareHeaders: (headers, { getState }) => {
  //   const token = (getState() as RootState).root?.auth?.authToken;

  //   if (token) {
  //     headers.set("authorization", `Bearer ${token}`);
  //   }

  //   return headers;
  // },
});

// Create an API using createApi
export const droneAPI = createApi({
  reducerPath: "user",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    quizCandidate: builder.query({
      query: () => `/pre-order`,
      // query: () => `/airhive/pre-order`,
    }),
    preOrder: builder.mutation({
      query: (data) => ({
        url: `/airhive/pre-order`,
        method: "POST",
        body: data,
      }),
    }),
    metaMaskData: builder.mutation({
      query: (data) => ({
        url: `/airhive/transaction`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// Export the API endpoints
export const {
  useLazyQuizCandidateQuery,
  usePreOrderMutation,
  useMetaMaskDataMutation,
} = droneAPI;
