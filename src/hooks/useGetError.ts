import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { ApiError, ApiResponse } from '../utils/axios'
import { queryKeys } from './queryKeys'
import { getError } from './service'

type CustomQueryOptions = Omit<
  UseQueryOptions<ApiResponse<Error>, ApiError>,
  'queryKey' | 'queryFn'
>

export const useGetError = (options?: CustomQueryOptions) => {
  return useQuery({
    queryKey: queryKeys.getError,
    queryFn: getError,
    ...options,
  })
}
