import axiosRequest from 'axios';

import { env } from '@/utils/env';

export const axios = axiosRequest.create({
  baseURL: env.APP_BASE_PATH,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});