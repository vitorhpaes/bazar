import { Container } from '@mui/material'

import CookieConsent from '@/components/CookieConsent'
import CreateGuestForm from './components/CreateGuestForm'
import HeaderInfo from './components/HeaderInfo'
import { useGuestStore } from '@/store'
import FinishBookingForm from '@/pages/BookingPage/components/FinishBookingForm'

const BookingPage: React.FC = () => {
  const { guest } = useGuestStore()

  return (
    <Container fixed>
      <HeaderInfo />
      {!guest?.id ? <CreateGuestForm /> : <FinishBookingForm />}
      <CookieConsent />
    </Container>
  )
}

export default BookingPage
