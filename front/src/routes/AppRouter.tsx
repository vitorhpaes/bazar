import { Routes, Route, Navigate } from 'react-router-dom'
import BookingPage from '../pages/BookingPage'
import { usePublicRoutes } from './context/hook'

const AppRouter: React.FC = () => {
  const publicRoutes = usePublicRoutes()
  return (
    <Routes>
      <Route index element={<Navigate to={publicRoutes.BOOKING} />} />
      <Route path={publicRoutes.BOOKING} element={<BookingPage />} />
    </Routes>
  )
}

export default AppRouter
