import axios from 'axios';
export const api = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registration = async user => {
  const { data } = await api.post(`/users/signup`, user);
  setToken(data.token);
  return data;
};

export const loginApi = async user => {
  const { data } = await api.post(`/users/login`, user);
  setToken(data.token);
  return data;
};

export const logout = async user => {
  const { data } = await api.post(`/users/logout`, user);
  clearToken();
  return data;
};

export const refresh = async persistedToken => {
  setToken(persistedToken);
  const { data } = await api.get(`/users/current`);
  return data;
};
