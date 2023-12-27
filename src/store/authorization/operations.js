// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const api = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const registration = async user => {
  const { data } = await api.post(`/users/signup`, user);
  setToken(data.token);
  return data;
};
