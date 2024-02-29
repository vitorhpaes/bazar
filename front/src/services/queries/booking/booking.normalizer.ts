import {
  AvailableSlotsResponse,
  CreateBookingResponse,
  NormalizedBooking,
  NormalizedSlot
} from '@/services/queries/booking/booking.dto'

export function normalizeBooking({
  createdAt,
  updatedAt,
  ...response
}: CreateBookingResponse): NormalizedBooking {
  return {
    ...response,
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt)
  }
}

export function normalizeSlot(slot: AvailableSlotsResponse): NormalizedSlot {
  return {
    ...slot,
    startTime: new Date(slot.startTime)
  }
}
