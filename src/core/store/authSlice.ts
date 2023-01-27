import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthSuccessResponse } from '@services/baseApi';
import { AppState } from '@store/index';

const slice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    token: null,
    refreshToken: null,
    tokenExpiryTime: undefined,
    firstName: null,
    lastName: null,
    avatarUrl: null,
  } as AuthSuccessResponse,
  reducers: {
    setCredentials: (
      state,
      { payload }: PayloadAction<AuthSuccessResponse>,
    ) => ({
      ...state,
      ...payload,
    }),
  },
  extraReducers: (builder) => {},
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: AppState) => state.auth.user;
