import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useToastStore } from '@/store'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  }
)

const ToastSnackbar = () => {
  const toasts = useToastStore(state => state.toasts)
  const closeToast = useToastStore(state => state.closeToast)

  return (
    <>
      {toasts.map((toast, index) => (
        <Snackbar
          key={toast.index}
          open={true}
          autoHideDuration={toast.timer}
          onClose={toast.handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          style={{ bottom: `${index > 0 ? index * 10 : 30}px` }}
        >
          <Alert onClose={() => closeToast(toast.index)} severity={toast.type}>
            {toast.description}
          </Alert>
        </Snackbar>
      ))}
    </>
  )
}

export default ToastSnackbar
