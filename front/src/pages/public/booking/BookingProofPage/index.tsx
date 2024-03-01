import { Alert, Box, Typography } from '@mui/material'
import GuestBookingAlert from './components/GuestBookingAlert'
import DownloadBookingProof from './components/DownloadBookingProof'

const BookingProofPage = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Alert severity="warning" sx={{ mb: 2 }}>
        <Typography variant="body1" fontWeight="600">
          É obrigatória a apresentação de documento de identidade com foto para
          acessar ao bazar.
        </Typography>
      </Alert>
      <GuestBookingAlert />
      <Box mt={8} display="flex" alignItems="center" justifyContent="center">
        <DownloadBookingProof />
      </Box>
    </Box>
  )
}

export default BookingProofPage
