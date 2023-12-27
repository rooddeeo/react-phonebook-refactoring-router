// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registration = async user => {
  console.log('axios', user);
  const response = await axios.post(`/users/signup`, user);
  console.log(response);
  return response;
};
