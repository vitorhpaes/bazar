import { create } from 'zustand'
import { v4 as uuid } from 'uuid'

type ToastTypeOption = 'success' | 'info' | 'warning' | 'error'

interface ToastDTO {
  type: ToastTypeOption
  timer?: number
  title?: string
  description: string
  onClose?: () => void
}

interface ToastFinalProps extends ToastDTO {
  index: string
  handleClose: () => void
}

interface ToastStoreProps {
  toasts: ToastFinalProps[]
  handleToast: (toastConfig: ToastDTO) => ToastFinalProps
  closeToast: (toastIndex: string) => void
}

const DEFAULT_TIMER = 2.5 * 1000

const useGuestStore = create<ToastStoreProps>(set => ({
  toasts: [],
  handleToast: (toastConfig: ToastDTO) => {
    const newToastIndex = uuid()
    function handleCloseThisToast() {
      set(state => ({
        toasts: state.toasts.filter(toast => toast.index !== newToastIndex)
      }))
    }

    const newToastFinalConfig: ToastFinalProps = {
      ...toastConfig,
      index: newToastIndex,
      timer: toastConfig.timer || DEFAULT_TIMER,
      handleClose: handleCloseThisToast
    }

    set(state => {
      const newToasts = [...state.toasts, newToastFinalConfig]
      return {
        toasts: newToasts
      }
    })
    return newToastFinalConfig
  },
  closeToast: (toastIndex: string) => {
    set(state => {
      const toastToBeClosed = state.toasts.find(
        toast => toast.index === toastIndex
      )
      if (toastToBeClosed?.onClose) toastToBeClosed.onClose()
      return {
        toasts: state.toasts.filter(toast => toast.index !== toastIndex)
      }
    })
  }
}))

export default useGuestStore
