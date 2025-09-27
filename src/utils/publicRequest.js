import axios from 'axios';

const httpPublicRequest = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (path, option = {}) => {
  const response = await httpPublicRequest.get(path, option);
  return response.data;
};
export const post = async (path, option = {}) => {
  const response = await httpPublicRequest.post(path, option);
  return response.data;
};
// export const auth = async (path, option = {}) => {
//   const res = await httpPublicRequest.post(path, option, {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//     withCredentials: true,
//     body: JSON.stringify(option),
//   });
//   return res.data;
// };

export default httpPublicRequest;
