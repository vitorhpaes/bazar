import { createTheme } from '@mui/material/styles'

import dark from './dark'
import light from './light'

export const COLOR_MODES = {
  light,
  dark
}

const buildTheme = (mode: keyof typeof COLOR_MODES) =>
  createTheme({
    palette: COLOR_MODES[mode],
    typography: {
      fontFamily: ['Montserrat Variable', 'sans-serif'].join(',')
    }
  })

export default buildTheme
