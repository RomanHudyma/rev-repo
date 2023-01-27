import {
  configureStore,
  ThunkAction,
  Action,
  ConfigureStoreOptions,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { baseApi } from '@services/baseApi';

import auth from './authSlice';

const makeStore = (opt?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      auth,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
    devTools: true,
    ...opt,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
