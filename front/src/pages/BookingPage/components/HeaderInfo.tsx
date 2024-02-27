import bannerSRC from '@/assets/images/banner.png'
import EventDetails from '@/pages/BookingPage/components/EventDetails'
import { FiInfo } from 'react-icons/fi'
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
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
      gap={3}
      mt={4}
      mb={5}
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
