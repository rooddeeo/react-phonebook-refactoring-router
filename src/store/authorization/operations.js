// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registration = async user => {
  console.log('axios', user);
  const { data } = await axios.post(`/users/signup`, user);
  console.log(data);
  return data;
};
