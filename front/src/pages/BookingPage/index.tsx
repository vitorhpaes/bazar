import { Container } from '@mui/material'

import CookieConsent from '@/components/CookieConsent'
import CreateGuestForm from './components/CreateGuestForm'
import HeaderInfo from './components/HeaderInfo'

const BookingPage: React.FC = () => {
  return (
    <Container fixed>
      <HeaderInfo />
      <CreateGuestForm />
      <CookieConsent />
    </Container>
  )
}

export default BookingPage
