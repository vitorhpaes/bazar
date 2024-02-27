import './App.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import buildTheme from '@/components/ui/theme/theme.build'

import dayjs from 'dayjs'
import { ptBR } from '@mui/x-date-pickers/locales'
import 'dayjs/locale/pt-br'

import { useThemeStore } from '@/store'
import queryClient from './services/queryClient'
import AppRouter from './routes/AppRouter'

dayjs.locale('pt-br')

function App() {
  const { mode } = useThemeStore()
  const theme = buildTheme(mode)

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="pt-br"
      localeText={
        ptBR.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
