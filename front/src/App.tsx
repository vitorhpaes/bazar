import './App.css'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import theme from './components/ui/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
