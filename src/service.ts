import { Vans } from './types'
import { fetchData } from './utils/axios'

export const getUsers = () => fetchData('/users')
export const getVans = () => fetchData<Vans.Response>('/vans')
