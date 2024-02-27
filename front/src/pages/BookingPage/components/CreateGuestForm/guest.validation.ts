import Shape from '@/@types/validation/Shape'
import * as yup from 'yup'
import { GuestForm } from './guest.form.d'

export const guestValidationSchema = yup.object().shape<Shape<GuestForm>>({
  name: yup.string().required('Nome é obrigatório'),
  document: yup.string().required('Documento é obrigatório'),
  birthDate: yup.date().required('Data de nascimento é obrigatória').nullable(),
  phoneNumber: yup.string().required('Telefone é obrigatório')
})
