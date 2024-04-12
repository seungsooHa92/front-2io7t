import { useQuery } from '@tanstack/react-query'
import { queryKeys } from './queryKeys'
import { getUsers } from './service'

export const useGetUsers = () => {
  return useQuery({ queryKey: queryKeys.getUsers, queryFn: getUsers })
}
