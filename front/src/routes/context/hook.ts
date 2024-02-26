import { useContext } from 'react'
import { RoutesContext } from './RoutesProvider'

export function useRoutes() {
  const context = useContext(RoutesContext)
  if (!context) {
    throw new Error('useRoutes must be used within a routes provider')
  }
  return context
}

export const usePrivateRoutes = () => useRoutes().private
export const usePublicRoutes = () => useRoutes().public
