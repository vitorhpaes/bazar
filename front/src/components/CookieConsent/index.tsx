import React from 'react'
import { Button, Snackbar } from '@mui/material'
import { useGuestStore } from '@/store' // Certifique-se de que o caminho está correto

const CookieConsent: React.FC = () => {
  const cookieConsent = useGuestStore(state => state.cookieConsent)
  const setCookieConsent = useGuestStore(state => state.setCookieConsent)

  const handleClose = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event?: Event | React.SyntheticEvent<any, Event>,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setCookieConsent(true)
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={!cookieConsent}
      onClose={handleClose}
      message="Este site usa cookies para melhorar a experiência do usuário. Ao continuar a usar nosso site, você concorda com o uso de cookies."
      action={
        <>
          <Button
            color="primary"
            variant="contained"
            size="medium"
            onClick={() => setCookieConsent(true)}
          >
            Continuar
          </Button>
        </>
      }
    />
  )
}

export default CookieConsent
