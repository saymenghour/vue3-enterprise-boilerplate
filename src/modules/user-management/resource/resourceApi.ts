import { Http } from '@/http';
import type { Resource } from './resourceType';

const ENDPOINT = '/api/v1/resources/permissions';

export async function fetchResourceWithPermissionApi(signal: AbortSignal) {
  const response = await Http.get<ResponseSuccess<Resource[]>>(ENDPOINT, undefined, { signal });
  return response?.data;
}