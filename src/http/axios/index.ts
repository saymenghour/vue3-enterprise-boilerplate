import axiosRequest from 'axios';

import { VUE_BASE_PATH } from '@/constants';

export const axios = axiosRequest.create({
  baseURL: VUE_BASE_PATH,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});
