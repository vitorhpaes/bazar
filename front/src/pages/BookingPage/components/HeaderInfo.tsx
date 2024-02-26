import bannerSRC from '@/assets/images/banner.png'
import EventDetails from '@/pages/BookingPage/components/EventDetails'
import { FiInfo } from 'react-icons/fi'
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button
} from '@mui/material'
import { useIsMobile } from '@/hooks/useIsMobile'

const HeaderInfo = () => {
  const isMobile = useIsMobile()
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mb={12}
      mt={5}
      gap={3}
    >
      <img
        src={bannerSRC}
        alt="bazar-banner"
        width={isMobile ? '70%' : '30%  '}
      />

      <Box>
        <Typography variant="h5" align="center">
          Local: Centro de Educação André Luiz
        </Typography>
        <Typography variant="subtitle2" align="center" color="">
          Em frente ao Parque Conta Dinheiro.
          <br />
          Avenida Luis de Camões, nº 2195, Lages - SC
        </Typography>

        <Typography variant="subtitle2" align="center" color="warning.main">
          Inscrições de 04 a 07 de março de 2024
        </Typography>
      </Box>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
      <Accordion>
        <AccordionSummary
          expandIcon={<FiInfo size={30} />}
          aria-controls="event-details"
          id="event-details"
        >
          Instruções gerais do bazar
        </AccordionSummary>
        <AccordionDetails>
          <EventDetails />
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default HeaderInfo
