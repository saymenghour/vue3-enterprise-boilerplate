import { useQuery } from '@tanstack/vue-query';
import { fetchMasterDataByDataTypeApi } from './masterDataApi';
import type { MasterDataQuery } from './masterDataType';

export function getFetchMasterDataByDataTypeQueryKey(query?: MasterDataQuery) {
  if (!query?.type) return ['fetchMasterDataByDataTypeQueryKey'];
  return ['fetchMasterDataByDataTypeQueryKey', query?.type];
}

export function getFetchMasterDataByDataTypeQuery(query: MasterDataQuery) {
  return useQuery({
    queryKey: getFetchMasterDataByDataTypeQueryKey(query),
    queryFn: ({ signal }) => fetchMasterDataByDataTypeApi(signal, query)
  });
}