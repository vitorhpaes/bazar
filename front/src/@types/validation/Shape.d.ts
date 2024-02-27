import { AnySchema } from 'yup'

type Shape<T = unknown> = Record<keyof T, AnySchema>

export default Shape
