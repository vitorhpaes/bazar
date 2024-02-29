import dayjs from './bootstrap.dayjs'

const DATE_FORMAT = 'DD/MM/YYYY'
const DAY_FORMAT = 'dddd'
const TIME_FORMAT = 'HH[h]mm'

export const formatDate = (date: Date) => {
  return dayjs(date).format(DATE_FORMAT)
}

export const getDayLabel = (date: Date) => {
  return dayjs(date).format(`${DAY_FORMAT}, ${DATE_FORMAT}`)
}

export const formatTime = (date: Date) => {
  return dayjs(date).format(TIME_FORMAT)
}
