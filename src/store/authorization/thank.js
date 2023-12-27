import { createAsyncThunk } from '@reduxjs/toolkit';
import { registration } from './operations';

export const registerThank = createAsyncThunk(
  'authorization/register',
  async (user, thunkAPI) => {
    console.log('thank', user);
    const response = await registration(user);
    console.log('response', response);
    return response;
  }
);
