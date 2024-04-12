import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { queryKeys } from './queryKeys'
import { getVans } from './service'
import { Vans } from './types'
import { ApiError, ApiResponse } from './utils/axios'

type CustomQueryOptions = Omit<
  UseQueryOptions<ApiResponse<Vans.Response>, ApiError>,
  'queryKey' | 'queryFn'
>

export const useGetVans = (options?: CustomQueryOptions) => {
  return useQuery({ queryKey: queryKeys.getVans, queryFn: getVans, ...options })
}
