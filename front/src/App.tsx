import './App.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import buildTheme from '@/components/ui/theme/theme.build'

import { useThemeStore } from '@/store'
import queryClient from './services/queryClient'
import AppRouter from './routes/AppRouter'
import LocalizationWrapper from '@/components/LocalizationWrapper'
import ToastSnackbar from '@/components/ToastSnackbar'

function App() {
  const { mode } = useThemeStore()
  const theme = buildTheme(mode)

  return (
    <LocalizationWrapper>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
          <ToastSnackbar />
        </QueryClientProvider>
      </ThemeProvider>
    </LocalizationWrapper>
  )
}

export default App
