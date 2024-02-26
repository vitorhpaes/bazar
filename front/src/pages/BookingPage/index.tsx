import { TextField, Box, Container } from '@mui/material'
import HeaderInfo from './components/HeaderInfo'

const BookingPage: React.FC = () => {
  return (
    <Container fixed>
      <HeaderInfo />
      <Box display="flex" flexDirection="column">
        <TextField />
      </Box>
    </Container>
  )
}

export default BookingPage
