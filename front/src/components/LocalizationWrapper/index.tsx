import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { ptBR } from '@mui/x-date-pickers/locales'
import dayjs from '@/utils/bootstrap.dayjs'

const LocalizationWrapper: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      dateLibInstance={dayjs}
      adapterLocale={'pt-br'}
      localeText={
        ptBR.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      {children}
    </LocalizationProvider>
  )
}

export default LocalizationWrapper
