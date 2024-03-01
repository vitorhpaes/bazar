import { Container } from '@mui/material'

import HeaderInfo from './HeaderInfo'
import { Outlet } from 'react-router-dom'

const BookingProcessWrapper: React.FC = () => {
  return (
    <Container fixed>
      <HeaderInfo />
      <Outlet />
    </Container>
  )
}

export default BookingProcessWrapper
