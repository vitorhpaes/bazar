import { createContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom' // Se estiver usando React Router
import publicRoutes from './public.routes.json'
import privateRoutes from './private.routes.json'
import { useMemo } from 'react'

interface RoutesContextProps {
  private: typeof privateRoutes
  public: typeof publicRoutes
  navigateWithParams: (route: string, params: Record<string, string>) => void
}

export const RoutesContext = createContext<RoutesContextProps>({
  private: privateRoutes,
  public: publicRoutes,
  navigateWithParams: () => {}
})

export function RoutesProvider({ children }: React.PropsWithChildren) {
  const navigate = useNavigate()
  const navigateWithParams = useCallback(
    (route: string, params: Record<string, string>) => {
      let finalRoute = route
      Object.keys(params).map(key => {
        finalRoute = finalRoute.replace(`:${key}`, params[key])
      })
      return navigate(finalRoute)
    },
    [navigate]
  )

  const value = useMemo(
    () => ({
      private: privateRoutes,
      public: publicRoutes,
      navigateWithParams
    }),
    [navigateWithParams]
  )

  return (
    <RoutesContext.Provider value={value}>{children}</RoutesContext.Provider>
  )
}
