import type { AxiosRequestConfig } from 'axios';
import queryString from 'query-string';
import { axios } from './axios';

export class Http {

  private static getError = (error: any) => {
    if (error.code === 'ERR_CANCELED') {
      console.log('Request aborted:', error.message);
    } else if (error.response) {
      const { data, status, statusText } = error.response;
      throw data != '' ? data : { message: `${status} ${statusText}` };
    } else {
      throw error;
    }
  };

  static async get<T = unknown>(url: string, queryParams?: Record<string, unknown> | undefined, config?: AxiosRequestConfig) {
    try {
      if (queryParams) {
        const query = queryString.stringify(queryParams);
        url = url.indexOf('?') == -1 ? `${url}?${query}` : `${url}&${query}`;
      }
      const res = await axios.get<T>(url, config);
      return res?.data;
    } catch (error: any) {
      Http.getError(error);
    }
  }

  static async post<T = unknown>(url: string, data: Record<string, unknown>, config?: AxiosRequestConfig) {
    try {
      const res = await axios.post<T>(url, data, config);
      return res?.data;
    } catch (error: any) {
      Http.getError(error);
    }
  }

  static async put<T = unknown>(url: string, data: Record<string, unknown>, config?: AxiosRequestConfig) {
    try {
      const res = await axios.put<T>(url, data, config);
      return res?.data;
    } catch (error: any) {
      Http.getError(error);
    }
  }

  static async delete<T = unknown>(url: string, config?: AxiosRequestConfig) {
    try {
      const res = await axios.delete<T>(url, config);
      return res?.data;
    } catch (error: any) {
      Http.getError(error);
    }
  }
}
