import { UseQueryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { Van } from '../types'
import { ApiError, ApiResponse } from '../utils/axios'
import { queryKeys } from './queryKeys'
import { getVanDetail } from './service'

type CustomQueryOptions = Omit<
  UseQueryOptions<ApiResponse<Van.Response>, ApiError>,
  'queryKey' | 'queryFn'
>

export const useGetVanDetail = (id: string, options?: CustomQueryOptions) => {
  return useSuspenseQuery({
    queryKey: queryKeys.getVan(id),
    queryFn: () => getVanDetail(id),
    ...options,
  })
}
