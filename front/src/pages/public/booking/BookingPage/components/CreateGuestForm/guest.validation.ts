import Shape from '@/@types/validation/Shape'
import { isValidDate } from '@/utils/date'
import * as yup from 'yup'
import { GuestForm } from './guest.form.d'

export const guestValidationSchema = yup.object().shape<Shape<GuestForm>>({
  name: yup.string().required('Nome é obrigatório'),
  document: yup.string().required('Documento é obrigatório'),
  birthDate: yup
    .string()
    .required('Data de nascimento é obrigatória')
    .matches(
      /^\d{2}\/\d{2}\/\d{4}$/,
      'Data de nascimento deve estar no formato DD/MM/AAAA'
    )
    .test(
      'is-valid-date',
      'Data de nascimento inválida',
      value => value == null || isValidDate(value)
    ),
  phoneNumber: yup.string().required('Telefone é obrigatório')
})
