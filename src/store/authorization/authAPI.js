// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registration = async user => {
  const { response } = await axios.post(`/users/signup`, user);
  return response.data;
};
