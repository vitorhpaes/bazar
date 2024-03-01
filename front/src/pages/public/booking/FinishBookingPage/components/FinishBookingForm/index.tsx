import { Box, Button, Grid, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { bookingValidationSchema } from './booking.validation'
import { BookingForm } from './booking.form.d'
import SelectAvailableDay from '@/components/SelectAvailableDay'
import { useGuestStore, useToastStore } from '@/store'
import { useMemo, useCallback } from 'react'
import SelectAvailableSlot from '@/components/SelectAvailableSlot'
import { Navigate, useNavigate } from 'react-router-dom'
import { usePublicRoutes } from '@/routes/context/hook'

const FinishBookingForm = () => {
  const { guest, setSelectedStartTime } = useGuestStore()
  const navigate = useNavigate()
  const publicRoutes = usePublicRoutes()
  const handleToast = useToastStore(state => state.handleToast)

  const goBack = () => navigate(-1)

  const goToConfirmSchedulePage = useCallback(() => {
    navigate(publicRoutes.CONFIRM)
  }, [navigate, publicRoutes])

  const formik = useFormik<BookingForm>({
    initialValues: {} as BookingForm,
    validateOnChange: true,
    validateOnMount: true,
    validationSchema: bookingValidationSchema,
    onSubmit: formData => {
      setSelectedStartTime(formData.startTime)
      goToConfirmSchedulePage()

      handleToast({
        type: 'info',
        description: 'Confirme o agendamento'
      })
    }
  })

  const simpleGuestName = useMemo(() => guest?.name.split(' ')[0], [guest])

  const isDisabledSubmitButton = useMemo(
    () => !formik.isValid,
    [formik.isValid]
  )

  if (!guest) return <Navigate to={publicRoutes.BOOKING} />

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant="h6" mb={2} align="center">
        {simpleGuestName}, selecione seu horário
      </Typography>
      <Grid container spacing={2} direction="column" mb={4}>
        <Grid item md={12}>
          <SelectAvailableDay
            variant="outlined"
            name="scheduleDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Selecione a data"
            value={formik.values.scheduleDate}
            error={formik.touched.scheduleDate && !!formik.errors.scheduleDate}
          />
        </Grid>
        <Grid item md={12}>
          {!!formik.values.scheduleDate && (
            <SelectAvailableSlot
              name="startTime"
              date={new Date(formik.values.scheduleDate)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Selecione o horário"
              value={formik.values.startTime}
              error={formik.touched.startTime && !!formik.errors.startTime}
            />
          )}
        </Grid>
        <Grid item>
          <Grid container item md={12} justifyContent="center" mt={3}>
            <Button
              disabled={isDisabledSubmitButton}
              color="primary"
              variant="contained"
              type="submit"
              size="large"
            >
              Finalizar agendamento
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
    </form>
  )
}

export default FinishBookingForm
