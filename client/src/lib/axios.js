import axios from 'axios';
import { getToken } from '@util/token';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    authorization: getToken() || '',
  },
});

const request = {
  post: async ({ uri = '', data = {} }) => {
    try {
      const response = await instance.post(uri, data);

      return response;
    } catch (err) {
      const { data: error } = err.response;

      alert(error.message);
    }
  },

  get: async ({ uri = '' }) => {
    try {
      const response = await instance.get(uri);

      return response;
    } catch (err) {
      const { data: error } = err.response;

      alert(error.message);
    }
  },

  delete: async ({ uri = '' }) => {
    try {
      const response = await instance.delete(uri);

      return response;
    } catch (err) {
      const { data: error } = err.response;

      alert(error.message);
    }
  },

  put: async (uri = '', data = {}) => {
    try {
      const response = await instance.put(uri, data);

      return response;
    } catch (err) {
      const { data: error } = err.response;

      alert(error.message);
    }
  },
};

export default request;
