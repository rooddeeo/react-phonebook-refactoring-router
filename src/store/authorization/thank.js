import { createAsyncThunk } from '@reduxjs/toolkit';
import { registration } from './authAPI';

export const registerThank = createAsyncThunk('authorization/register', user =>
  registration(user)
);
