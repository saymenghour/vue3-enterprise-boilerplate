import { Http } from '@/http';
import type { MasterData, MasterDataQuery } from './masterDataType';

const ENDPOINT = '/api/v1/master-data';

export async function fetchMasterDataByDataTypeApi(signal: AbortSignal, query: MasterDataQuery) {
  const response = await Http.get<SuccessResponse<MasterData[]>>(ENDPOINT, query, { signal });
  return response?.data;
}
