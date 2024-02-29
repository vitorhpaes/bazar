import { useToastStore } from '@/store'
import { AxiosError } from 'axios'

export interface ApiErrorResponse extends Record<string, unknown> {
  data: unknown
  message: string
}

function queryErrorHandler(error: AxiosError<ApiErrorResponse>) {
  console.log({ error })
  const errorMessage =
    error.response?.data?.message || 'Ocorreu um erro inesperado.'

  useToastStore.getState().handleToast({
    type: 'error',
    description: errorMessage,
    timer: 2500
  })
}

export default queryErrorHandler
