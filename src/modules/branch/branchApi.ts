import { Http } from '@/http';
import type { Branch } from './branchType';

const ENDPOINT = '/api/v1/branches';

export async function fetchBranchAutocompleteApi(signal: AbortSignal) {
  const response = await Http.get<SuccessResponse<Branch[]>>(ENDPOINT + '/autocomplete', undefined, { signal });
  return response?.data;
}
