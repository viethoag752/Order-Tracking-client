import axios from 'axios';
import PropTypes from 'prop-types';

const httpRequest = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const get = async (path, option = {}) => {
  const response = await httpRequest.get(path, option);
  return response.data;
};
httpRequest.PropTypes = {
  path: PropTypes.string.isRequired,
  option: PropTypes.object,
};
export default httpRequest;
