import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

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
  // eslint-disable-next-line consistent-return
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});

export default baseApi;
