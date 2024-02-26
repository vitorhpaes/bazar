import './App.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import { useThemeStore } from '@/store'
import buildTheme from '@/components/ui/theme/theme.build'

function App() {
  const { mode } = useThemeStore()
  const theme = buildTheme(mode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
