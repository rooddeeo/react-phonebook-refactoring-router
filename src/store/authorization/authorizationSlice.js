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
      console.log(payload);
      state.token = payload.data.token;
      state.user = payload.data.user;
    });
  },
});
export const authorizationReducer = authorizationSlice.reducer;
