import { TextField, Button, Grid, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { GuestForm } from './guest.form.d'
import { guestValidationSchema } from './guest.validation'
import { useCreateGuest } from '@/services/queries/guest.hooks'
import { DatePicker } from '@mui/x-date-pickers'
import MaskedTextField from '@/components/MaskedTextField'

const CreateGuestForm = () => {
  const createGuest = useCreateGuest()
  const formik = useFormik<GuestForm>({
    initialValues: {} as GuestForm,
    validateOnChange: true,
    validationSchema: guestValidationSchema,
    onSubmit: formData => createGuest.mutate(formData)
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant="h6" mb={2} align="center">
        Informe seus dados
      </Typography>
      <Grid container spacing={2} direction="column" mb={4}>
        <Grid item>
          <TextField
            fullWidth
            required
            id="name"
            name="name"
            label="Nome completo"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item>
          <MaskedTextField
            mask="cpf"
            fullWidth
            required
            id="document"
            name="document"
            label="Documento"
            value={formik.values.document}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.document && Boolean(formik.errors.document)}
            helperText={formik.touched.document && formik.errors.document}
          />
        </Grid>
        <Grid item>
          <DatePicker
            sx={{ width: '100%' }}
            components={{
              TextField: props => (
                <TextField
                  error={
                    formik.touched.birthDate && Boolean(formik.errors.birthDate)
                  }
                  helperText={
                    formik.touched.birthDate && String(formik.errors.birthDate)
                  }
                  {...props}
                />
              )
            }}
            name="birthDate"
            label="Data de nascimento"
            value={formik.values.birthDate}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item>
          <MaskedTextField
            fullWidth
            required
            mask="phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
            label="Telefone"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </Grid>
        <Grid container item md={12} justifyContent="center" mt={3}>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            size="large"
          >
            Reservar horário
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default CreateGuestForm
