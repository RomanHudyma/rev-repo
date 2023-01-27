import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { AppState } from '@store/index';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://linkup-academy.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as AppState).auth;

      if (token) {
        headers.set('authentication', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default baseApi;
