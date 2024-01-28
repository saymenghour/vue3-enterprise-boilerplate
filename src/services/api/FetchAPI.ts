import { VUE_BASE_PATH } from '@/constants';

/**
 * Base Fetch API
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * @link https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters
 *
 * @param resource This defines the resource that you wish to fetch.
 * @param options An object containing any custom settings that you want to apply to the request.
 * @returns value object
 */
export const fetchApi = async (resource: string, options?: RequestInit) => {
  const response = await fetch(VUE_BASE_PATH + resource, options);
  return response.json();
};
