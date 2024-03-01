import { useCallback, useState, useMemo } from 'react'
import { useSubmitBooking } from '@/services/queries/booking/booking.hooks'
import { FiInfo } from 'react-icons/fi'
import { useGuestStore, useToastStore } from '@/store'
import { Navigate, useNavigate } from 'react-router-dom'
import { usePublicRoutes } from '@/routes/context/hook'
import {
  Box,
  Grid,
  Typography,
  Button,
  Alert,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'

const ConfirmBookingPage = () => {
  const submitBooking = useSubmitBooking()
  const { guest, selectedStartTime, booking } = useGuestStore()
  const navigate = useNavigate()
  const publicRoutes = usePublicRoutes()
  const handleToast = useToastStore(state => state.handleToast)

  const formattedSelectedStartTime = useMemo(
    () =>
      selectedStartTime
        ? new Date(selectedStartTime).toLocaleString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        : 'Não selecionado',
    [selectedStartTime]
  )

  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false)

  const goBack = () => navigate(-1)

  const goToProofPage = useCallback(() => {
    navigate(publicRoutes.PROOF)
  }, [navigate, publicRoutes])

  const handleSubmitBooking = useCallback(() => {
    if (!acceptedTerms)
      return handleToast({
        type: 'error',
        description: 'Aceite os termos de uso para realizar o agendamento'
      })

    if (!guest?.id || !selectedStartTime)
      return handleToast({
        type: 'error',
        description: 'Não foi possível realizar o agendamento. Tente novamente'
      })

    submitBooking.mutate(
      {
        guestId: guest.id,
        startTime: selectedStartTime,
        acceptedTerms
      },
      {
        onSuccess() {
          handleToast({
            type: 'success',
            description: 'Horário agendado com sucesso!',
            timer: 5000
          })
          goToProofPage()
        }
      }
    )
  }, [
    guest?.id,
    selectedStartTime,
    handleToast,
    goToProofPage,
    submitBooking,
    acceptedTerms
  ])

  const isDisabledSubmitButton = useMemo(() => !acceptedTerms, [acceptedTerms])

  const guestHasBooking = useMemo(
    () => guest?.id === booking?.guestId,
    [guest, booking]
  )

  if (!guest) return <Navigate to={publicRoutes.BOOKING} />
  if (!selectedStartTime) return <Navigate to={publicRoutes.FINISH} />
  if (booking && guestHasBooking) return <Navigate to={publicRoutes.PROOF} />

  return (
    <Box>
      <Typography variant="h6" mb={2} align="center">
        Confirme as informações
      </Typography>

      {guest && selectedStartTime && (
        <Alert severity="info" sx={{ mb: 2 }}>
          <Typography variant="body1" fontWeight="600">
            Nome: {guest.name}
          </Typography>
          <Typography variant="body1" fontWeight="600">
            Documento: {guest.document}
          </Typography>
          <Typography variant="body1" fontWeight="600">
            Telefone: {guest.phoneNumber}
          </Typography>
          <Typography variant="body1" fontWeight="600">
            Horário selecionado: {formattedSelectedStartTime}
          </Typography>
        </Alert>
      )}

      <Grid container spacing={2} direction="column" mb={4}>
        <Grid item md={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={acceptedTerms}
                onChange={(_value, accepted) => setAcceptedTerms(accepted)}
                name="acceptTerms"
              />
            }
            label="Eu aceito os termos de uso"
          />
        </Grid>
        <Grid item>
          <Accordion>
            <AccordionSummary
              expandIcon={<FiInfo size={20} />}
              aria-controls="terms-of-use-content"
              id="terms-of-use-header"
            >
              <Typography>Ler termos de uso</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" fontWeight="600" color="info">
                Estou ciente de que os produtos que estou adquirindo, foram
                oriundos de doação feita pela Receita Federal do Brasil ao
                Hospital Seara do Bem. Fico ciente ainda que por conta de serem
                produtos que foram apreendidos em operações da Receita Federal
                do Brasil, tais produtos não possuem qualquer garantia de uso,
                funcionamento ou manutenção, sendo que após a compra efetuada
                não haverá qualquer troca de produto ou devolução dos valores
                pagos, isentando o Hospital Seara do Bem de qualquer defeito,
                falha, vício ou não conformidade dos produtos adquiridos. *
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item md={12}>
          <Grid container item md={12} justifyContent="center" mt={3}>
            <Button
              disabled={isDisabledSubmitButton}
              color="primary"
              variant="contained"
              onClick={handleSubmitBooking}
              size="large"
            >
              Confirmar agendamento
            </Button>
          </Grid>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={12}
          >
            <Button
              color="inherit"
              variant="contained"
              type="button"
              size="large"
              onClick={goBack}
            >
              Voltar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ConfirmBookingPage
