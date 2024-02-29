export interface CreateBookingPayload {
  startTime: Date
  guestId: string
}

export interface CreateBookingResponse {
  id: string
  guestId: string
  slotId: string
  createdAt: string
  updatedAt: string
}

export interface NormalizedBooking extends CreateBookingResponse {
  createdAt: Date
  updatedAt: Date
}

export interface AvailableSlotsResponse {
  startTime: string
  count: number
}

export interface NormalizedSlot {
  startTime: Date
  count: number
}
