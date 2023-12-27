import { createSlice } from '@reduxjs/toolkit';
import { registerThank } from './thank';

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    token: '',
    user: null,
  },
  extraReducers: builder => {
    builder.addCase(registerThank.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    });
  },
});
export const authorizationReducer = authorizationSlice.reducer;
