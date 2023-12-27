import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const api = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get(`/contacts`);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactNew = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await api.post(`/contacts`, { ...contact });
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const contactDelete = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await api.delete(`/contacts/${contactId}`);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
