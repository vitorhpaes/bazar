import { QueryClient } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60 * 10,
      refetchOnWindowFocus: true
    }
  }
})

export default queryClient
