import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { useGuestStore } from '@/store'

const GuestBookingAlert = () => {
  const { guest, booking } = useGuestStore()
  console.log({ guest, booking })

  if (!guest || !booking) return null

  const bookingDate = new Date(booking.slot.startTime).toLocaleDateString(
    'pt-BR',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
  )
  const guestName = guest.name

  const alertMessage = `Olá, ${guestName}! Seu horário está marcado para ${bookingDate}.`

  return (
    <Alert severity="success">
      <AlertTitle>Agendamento confirmado!</AlertTitle>
      {alertMessage}
    </Alert>
  )
}

export default GuestBookingAlert
