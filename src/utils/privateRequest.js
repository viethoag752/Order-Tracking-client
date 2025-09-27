import axios from 'axios';

const httpPrivateRequest = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

httpPrivateRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export const get = async (path, option = {}) => {
  const response = await httpPrivateRequest.get(path, option);
  return response.data;
};
export const post = async (path, option = {}) => {
  const response = await httpPrivateRequest.post(path, option);
  return response.data;
};
export const auth = async (path, option = {}) => {
  const res = await httpPrivateRequest.post(path, option, {
    withCredentials: true,
    data: option,
  });
  return res.data;
};

export default httpPrivateRequest;
