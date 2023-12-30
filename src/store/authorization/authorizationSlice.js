import { createSlice } from '@reduxjs/toolkit';
import { loginThank, logoutThank, registerThank } from './thanks';

const handleFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    token: '',
    user: null,
  },
  extraReducers: builder => {
    builder
      .addCase(registerThank.fulfilled, handleFulfilled)
      .addCase(loginThank.fulfilled, handleFulfilled)
      .addCase(logoutThank.fulfilled, (state, { payload }) => {
        state.token = '';
        state.user = null;
      });
  },
});
export const authorizationReducer = authorizationSlice.reducer;
