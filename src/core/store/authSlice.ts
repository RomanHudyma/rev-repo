import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthSuccessResponse } from '@services/baseApi';

const slice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    token: null,
    refreshToken: null,
    tokenExpiryTime: null,
    firstName: null,
    lastName: null,
    avatarUrl: null,
  },
  reducers: {
    setCredentials: (
      state,
      { payload }: PayloadAction<AuthSuccessResponse>,
    ) => ({
      ...state,
      ...(payload as object),
    }),
  },
  extraReducers: (builder) => {},
});

export const { setCredentials } = slice.actions;

export default slice.reducer;
