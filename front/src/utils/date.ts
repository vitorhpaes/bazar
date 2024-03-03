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

export const isValidDate = (dateString: string) => {
  const parts = dateString.split('/')
  if (parts.length !== 3) return false

  const day = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10) - 1 // os meses são baseados em zero
  const year = parseInt(parts[2], 10)
  if (year < 1000 || year > 3000 || month < 0 || month > 11) {
    return false
  }

  const date = new Date(year, month, day)
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  )
}

export const parseDateString = (originalValue: string) => {
  if (originalValue) {
    const parts = originalValue.split('/')
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10)
      const month = parseInt(parts[1], 10) - 1 // os meses são baseados em zero
      const year = parseInt(parts[2], 10)
      const date = new Date(year, month, day)
      console.log({
        day,
        month,
        year,
        date: {
          day: date.getDate(),
          month: date.getMonth(),
          year: date.getFullYear()
        }
      })
      if (
        date &&
        date.getDate() === day &&
        date.getMonth() === month &&
        date.getFullYear() === year
      ) {
        return date
      }
    }
  }
  return new Date('') // Retorna uma data inválida se a entrada for inválida
}
