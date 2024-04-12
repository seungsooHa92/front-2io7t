import axios from 'axios';

export interface ApiResponse<T> {
    data: T | null;
    error?: string | Error; // error 변수의 타입을 string 또는 Error로 명시
  }

export interface ApiError { error?: string | Error}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

axiosInstance.interceptors.response.use(
  response => {
    // 요청이 성공하면 그대로 반환
    return response;
  },
  error => {
    // 요청이 실패하면 오류 처리
    return Promise.reject(error);
  }
);

export async function fetchData<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await axiosInstance.get<T>(endpoint);
      return { data: response.data };
    }catch (error) {
        return { data: null, error: error instanceof Error ? error.message : String(error) };
      }
    
  }
  
  export async function createData<T>(endpoint: string, newData: T): Promise<ApiResponse<T>> {
    try {
      const response = await axiosInstance.post<T>(endpoint, newData);
      return { data: response.data };
    } catch (error) {
        return { data: null, error: error instanceof Error ? error.message : String(error) };
      }
    
  }
  
  export async function updateData<T>(endpoint: string, updatedData: T): Promise<ApiResponse<T>> {
    try {
      const response = await axiosInstance.put<T>(endpoint, updatedData);
      return { data: response.data };
    } catch (error) {
        return { data: null, error: error instanceof Error ? error.message : String(error) };
      }
    
  }
  
  export async function deleteData(endpoint: string): Promise<ApiResponse<null>> {
    try {
      await axiosInstance.delete(endpoint);
      return { data: null };
    } catch (error) {
        return { data: null, error: error instanceof Error ? error.message : String(error) };
      }
    
  }