import { create } from 'zustand'
import { COLOR_MODES } from './../components/ui/theme/theme.build'

type ThemeMode = keyof typeof COLOR_MODES

interface ThemeStoreProps {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}

function getThemeByHour() {
  const now = new Date()
  const hour = now.getHours()

  const lightThemeBegin = 5
  const lightThemeEnd = 20

  if (hour >= lightThemeBegin && hour < lightThemeEnd) {
    return 'light'
  } else {
    return 'dark'
  }
}

const useThemeStore = create<ThemeStoreProps>(set => ({
  mode: getThemeByHour(),
  setMode: mode => set(() => ({ mode }))
}))

export default useThemeStore
