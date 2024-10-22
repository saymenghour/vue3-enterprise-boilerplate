import { getAccessToken, getBearerToken, getDeviceId } from '@/services/localStorage';
import { axios } from '.';

import { ErrorCode } from '@/constants';
import { refreshToken } from '@/modules/auth/authenticationService';

axios.interceptors.request.use(
  async (config) => {
    const token = getAccessToken(); // Function to get the current token
    if (token) {
      config.headers['Device-Id'] = getDeviceId();
      config.headers['Authorization'] = `Bearer ${token}`;
    }
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
    const res: ErrorResponse = error.response.data;
    if (res?.errorCode == ErrorCode.AccessTokenExpired && !error.config._isRetry) {
      return refreshToken().then((response) => {
        if (response) {
          error.config._isRetry = true;
          const originalRequestConfig = error.config;
          originalRequestConfig.headers.Authorization = getBearerToken();
          return axios.request(originalRequestConfig);
        }
      });
    }

    return Promise.reject(error);
  }
);
