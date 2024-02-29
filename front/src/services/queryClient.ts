import queryErrorHandler, {
  ApiErrorResponse
} from '@/services/queryErrorHandler'
import { AxiosError } from 'axios'
import { QueryClient } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60 * 10,
      refetchOnWindowFocus: true,
      onError: (error: unknown) =>
        queryErrorHandler(error as AxiosError<ApiErrorResponse>)
    },
    mutations: {
      onError: (error: unknown) =>
        queryErrorHandler(error as AxiosError<ApiErrorResponse>)
    }
  }
})

export default queryClient
