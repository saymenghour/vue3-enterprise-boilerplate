import axios from 'axios';

import { getAccessToken } from '../LocalStorage';

import { ErrorCode } from '@/constants/ErrorCode';
import { refreshToken } from '@/modules/authentication/authenticationService';

// Global axios defaults that will be applied to every request.
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  async (config) => {
    // Do something with request
    return config;
  },
  async (error: any) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error: any) => {
    const res: ResponseError = error.response.data;
    if (res?.errorCode == ErrorCode.AccessTokenExpired && !error.config._isRetry) {
      await refreshToken();

      error.config._isRetry = true;
      const originalRequestConfig = error.config;
      originalRequestConfig.headers.Authorization = `bearer ${getAccessToken()}`;
      return axios.request(originalRequestConfig);
    }

    return Promise.reject(error);
  }
);
