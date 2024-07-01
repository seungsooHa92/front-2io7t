import {
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query'
import { Vans } from '../types'
import { ApiError, ApiResponse } from '../utils/axios'
import { queryKeys } from './queryKeys'
import { getVans } from './service'

type CustomQueryOptions = Omit<
  UseSuspenseQueryOptions<ApiResponse<Vans.Response>, ApiError>,
  'queryKey' | 'queryFn'
>

export const useGetVans = (options?: CustomQueryOptions) => {
  return useSuspenseQuery({
    queryKey: queryKeys.getVans,
    queryFn: getVans,
    staleTime: 0,
    ...options,
  })
}
