import {
  AvailableQuickSlotsResponse,
  CreateBookingResponse,
  CreateBookingSlotResponse,
  NormalizedBooking,
  NormalizedBookingSlot,
  NormalizedQuickSlot
} from '@/services/queries/booking/booking.dto'

function normalizeBookingSlot(
  bookingSlot: CreateBookingSlotResponse
): NormalizedBookingSlot {
  return {
    ...bookingSlot,
    startTime: new Date(bookingSlot.startTime),
    endTime: new Date(bookingSlot.endTime)
  }
}

export function normalizeBooking({
  createdAt,
  updatedAt,
  slot,
  ...response
}: CreateBookingResponse): NormalizedBooking {
  return {
    ...response,
    slot: normalizeBookingSlot(slot),
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt)
  }
}

export function normalizeSlot(
  slot: AvailableQuickSlotsResponse
): NormalizedQuickSlot {
  return {
    ...slot,
    startTime: new Date(slot.startTime)
  }
}
