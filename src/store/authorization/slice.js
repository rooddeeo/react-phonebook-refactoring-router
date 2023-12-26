import { createSlice } from '@reduxjs/toolkit';
import { registerThank } from './thank';

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    token: '',
    name: null,
  },
  extraReducers: builder => {
    builder.addCase(registerThank.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.name = payload.name;
    });
  },
});
export const authorizationReducer = authorizationSlice.reducer;
