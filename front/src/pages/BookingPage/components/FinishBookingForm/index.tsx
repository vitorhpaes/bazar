import { Button, Grid, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { bookingValidationSchema } from './booking.validation'
import { BookingForm } from './booking.form.d'
import { useSubmitBooking } from '@/services/queries/booking/booking.hooks'
import SelectAvailableDay from '@/components/SelectAvailableDay'
import { useGuestStore, useToastStore } from '@/store'
import { useMemo } from 'react'
import SelectAvailableSlot from '@/components/SelectAvailableSlot'

const FinishBookingForm = () => {
  const submitBooking = useSubmitBooking()
  const { guest } = useGuestStore()
  const handleToast = useToastStore(state => state.handleToast)

  const formik = useFormik<BookingForm>({
    initialValues: {
      guestId: guest?.id
    } as BookingForm,
    validateOnChange: true,
    validationSchema: bookingValidationSchema,
    onSubmit: formData => {
      submitBooking.mutate(formData, {
        onSuccess() {
          handleToast({
            type: 'success',
            description: 'Horário agendado com sucesso!',
            timer: 5000
          })
        }
      })
    }
  })

  const isDisabledSubmitButton = useMemo(
    () => !formik.values.scheduleDate,
    [formik.values.scheduleDate]
  )

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant="h6" mb={2} align="center">
        Selecione o seu horário
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
        </Grid>
      </Grid>
    </form>
  )
}

export default FinishBookingForm
