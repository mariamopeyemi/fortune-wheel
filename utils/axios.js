import axios from 'axios';
import { getAuthToken } from './helpers';

const uploadOptions = {
  baseURL: 'https://filemgt.shoutng.com/v1',
  headers: { 'Content-Type': 'multipart/form-data' },
};

export const uploadRequest = axios.create(uploadOptions);

export const authFetch = axios.create({
  baseURL: 'https://gateway.shoutng.com/v1',
});

//axios interceptors
//request
authFetch.interceptors.request.use(
  (config) => {
    config.headers.common['Authorization'] = `Bearer ${getAuthToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//response
authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      return;
      // logoutUser();
    }
    return Promise.reject(error);
  }
);
