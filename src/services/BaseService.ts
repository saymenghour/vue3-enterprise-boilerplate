import type { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import queryString from 'query-string';
import { HttpRequest } from './HttpRequest';

class BaseService {
  private async sendRequest(
    method: string,
    url: string,
    data?: Record<string, any>,
    extraHeaders?: AxiosRequestHeaders,
    extraConfig?: Partial<AxiosRequestConfig>
  ) {
    try {
      const request = await HttpRequest.send(method, url, data, extraHeaders, extraConfig);
      return request.data;
    } catch (error: any) {
      if (error.code === 'ERR_CANCELED') {
        console.log('Request aborted:', error.message);
      } else if (error.response) {
        const { data, status, statusText } = error.response;
        throw data != ''
          ? data
          : {
              message: `${status} ${statusText}`
            };
      } else {
        throw error;
      }
    }
  }

  get<T = any>(
    url: string,
    queryParams?: any,
    extraHeaders?: AxiosRequestHeaders,
    extraConfig?: AxiosRequestConfig
  ): Promise<T> {
    if (queryParams) {
      const query = queryString.stringify(queryParams);
      url = url.indexOf('?') == -1 ? `${url}?${query}` : `${url}&${query}`;
    }
    return this.sendRequest('GET', url, undefined, extraHeaders, extraConfig);
  }

  post<T = any>(
    url: string,
    data: Record<string, any>,
    extraHeaders?: AxiosRequestHeaders,
    extraConfig?: AxiosRequestConfig
  ): Promise<T> {
    return this.sendRequest('POST', url, data, extraHeaders, extraConfig);
  }

  put<T = any>(
    url: string,
    data: Record<string, any>,
    extraHeaders?: AxiosRequestHeaders,
    extraConfig?: AxiosRequestConfig
  ): Promise<T> {
    return this.sendRequest('PUT', url, data, extraHeaders, extraConfig);
  }

  delete<T = any>(
    url: string,
    data?: Record<string, any>,
    extraHeaders?: AxiosRequestHeaders,
    extraConfig?: AxiosRequestConfig
  ): Promise<T> {
    return this.sendRequest('DELETE', url, data, extraHeaders, extraConfig);
  }
}

export default new BaseService();
