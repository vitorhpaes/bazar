import bazarRequest from '@/services/request'
import {
  AvailableSlotsResponse,
  CreateBookingPayload,
  CreateBookingResponse
} from './booking.dto.d'

export function fetchSubmitBooking(guest: CreateBookingPayload) {
  return bazarRequest.post<CreateBookingResponse>('/bookings', guest)
}

export function fetchAvailableDays() {
  return bazarRequest.get<string[]>('/schedule-day/available')
}

export function fetchAvailableSlots(date: Date) {
  const dateString = date.toISOString().split('T')[0]
  return bazarRequest.get<AvailableSlotsResponse[]>(
    `/schedule-day/${dateString}/slots/available`
  )
}
