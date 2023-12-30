import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi, logout, registration } from './operations';

export const registerThank = createAsyncThunk(
  'authorization/register',
  async (user, thunkAPI) => {
    const response = await registration(user);
    return response;
  }
);
export const loginThank = createAsyncThunk(
  'authorization/login',
  async (user, thunkAPI) => {
    const response = await loginApi(user);
    return response;
  }
);
export const logoutThank = createAsyncThunk(
  'authorization/logout',
  async (user, thunkAPI) => {
    const response = await logout(user);
    return response;
  }
);
