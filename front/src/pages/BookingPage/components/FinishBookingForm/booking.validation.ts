import Shape from '@/@types/validation/Shape'
import * as yup from 'yup'
import { BookingForm } from './booking.form.d'

export const bookingValidationSchema = yup.object().shape<Shape<BookingForm>>({
  scheduleDate: yup.string().required('Selecione o dia'),
  startTime: yup.string().required('Informe a hora exata da sua visita'),
  guestId: yup.string().required('Id do visitante é obrigatório')
})
