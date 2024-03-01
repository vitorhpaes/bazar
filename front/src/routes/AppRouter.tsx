import BookingProcessWrapper from '@/pages/public/booking/commons/BookingProcessWrapper'
import { Routes, Route, Navigate } from 'react-router-dom'
import { BookingPage } from '../pages/public/booking/BookingPage'
import { usePublicRoutes } from './context/hook'
import BookingProofPage from './../pages/public/booking/BookingProofPage'
import { FinishBookingPage } from '@/pages/public/booking/FinishBookingPage'
import ConfirmBookingPage from './../pages/public/booking/ConfirmBookingPage/index'

const AppRouter: React.FC = () => {
  const publicRoutes = usePublicRoutes()
  return (
    <Routes>
      <Route index element={<Navigate to={publicRoutes.BOOKING} />} />
      <Route path={publicRoutes.BOOKING} element={<BookingProcessWrapper />}>
        <Route index element={<BookingPage />} />
        <Route path={publicRoutes.FINISH} element={<FinishBookingPage />} />
        <Route path={publicRoutes.CONFIRM} element={<ConfirmBookingPage />} />
        <Route path={publicRoutes.PROOF} element={<BookingProofPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
