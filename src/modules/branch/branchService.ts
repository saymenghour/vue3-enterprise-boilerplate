import { useQuery } from '@tanstack/vue-query';
import { fetchBranchAutocompleteApi } from './branchApi';

export function getFetchBranchAutocompleteApiQueryKey() {
  return ['fetchBranchAutocomplete'];
}

export function useFetchMasterDataByDataTypeQuery() {
  return useQuery({
    queryKey: getFetchBranchAutocompleteApiQueryKey(),
    queryFn: ({ signal }) => fetchBranchAutocompleteApi(signal)
  });
}