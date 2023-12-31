import { createSlice } from '@reduxjs/toolkit';
import { loginThank, logoutThank, refreshThank, registerThank } from './thanks';

const handleFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggedIn = true;
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoading: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerThank.fulfilled, handleFulfilled)
      .addCase(loginThank.fulfilled, handleFulfilled)
      .addCase(logoutThank.fulfilled, (state, { payload }) => {
        state.token = null;
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
      })
      .addCase(refreshThank.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThank.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThank.rejected, state => {
        state.isRefreshing = false;
      });
  },
});
export const authorizationReducer = authorizationSlice.reducer;
